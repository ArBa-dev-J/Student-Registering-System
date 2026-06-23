import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

function StudentForm() {
  const [serverError, setServerError] = useState();
  const [serverDataError, setServerDataError] = useState([]);
  const [fetchError, setFetchError] = useState();

  const [success, setSuccess] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  // -----------------------------------------------

  // get all subjects directly from db
  const fetchSubjects = async () => {
    try {
      const response = await axios.get(`${VITE_API_URL}/subjects/allSubjects`);

      setFetchError(null);
      setSubjects(response.data.data);
    } catch (error) {
      setFetchError(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);
  // -----------------------------------------------
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <main>
        <div className="mt-[50%]  max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Add New Student
            </h2>

            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">
              Back
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Name
              </label>

              <input
                type="text"
                {...register("name", {
                  required: "Student name is required",
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Surname */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Surname
              </label>

              <input
                type="text"
                {...register("surname", {
                  required: "Student surname is required",
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Smith"
              />

              {errors.surname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.surname.message}
                </p>
              )}
            </div>

            {/* Subject Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>

              <select
                {...register("subject_id", {
                  required: "Please select a subject",
                  valueAsNumber: true,
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>

                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.subject_name}
                  </option>
                ))}
              </select>

              {errors.subject_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject_id.message}
                </p>
              )}
            </div>

            {/* Server Messages */}
            {serverError && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm">
                {serverError}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded-lg text-sm">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            >
              Add Student
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default StudentForm;
