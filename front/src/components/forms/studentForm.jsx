import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

function StudentForm() {
  const [serverError, setServerError] = useState();
  const [serverDataError, setServerDataError] = useState([]);
  const [success, setSuccess] = useState(null);

  const VITE_API_URL = import.meta.env.VITE_API_URL;

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
        <div className="mt-[50%] max-w-md mx-auto p-6 bg-white shadow rounded">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

            <Link to="/">Exit to main page</Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Subject Name */}
            <div className="mb-4">
              <label className="block mb-1">Student Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Student name is required",
                })}
                className="w-full border p-2 rounded"
                placeholder="e.g. Mathematics"
              />
              {errors.subject_name && (
                <p className="text-red-500 text-sm">
                  {errors.subject_name.message}
                </p>
              )}

              <p className="text-red-500 text-sm">
                {/* {getServerError("subject_name")} */}
              </p>
            </div>

            {/* Credit Score */}
            <div className="mb-4">
              <label className="block mb-1">Credit Score</label>
              <input
                type="number"
                {...register("surname", {
                  required: "Credit score is required",
                })}
                className="w-full border p-2 rounded"
                placeholder="e.g. from 0 to 100"
              />
              {errors.credit_score && (
                <p className="text-red-500 text-sm">
                  {errors.credit_score.message}
                </p>
              )}

              <p className="text-red-500 text-sm">
                {/* {getServerError("credit_score")} */}
              </p>
            </div>
            <p className="text-red-500 text-sm">{serverError}</p>
            <p>{success}</p>

            <input
              type="submit"
              value="add a new subject"
              className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            />
          </form>
        </div>
      </main>
    </>
  );
}

export default StudentForm;
