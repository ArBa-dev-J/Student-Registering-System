import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function SubjectForm() {
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

  const onSubmit = async (data) => {
    setSuccess(null);
    setServerError(null);
    try {
      const response = await axios.post(
        `${VITE_API_URL}/subjects/newSubjects`,
        data,
      );

      setSuccess(`${data.subject_name} was successfully added`);
      setServerError(null);
      if (response) reset();
    } catch (error) {
      setServerDataError(error?.response?.data?.error);
      setServerError(error?.response?.data?.message);
    }
  };

  // filter data errors by specific fields

  const getServerError = (fieldName) => {
    return serverDataError?.find((error) => error.path === fieldName)?.msg;
  };

  return (
    <main>
      <div className="mt-[50%] max-w-md mx-auto p-6 bg-white shadow rounded">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-semibold mb-4">Add New Subject</h2>

          <Link to="/">Exit to main page</Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Subject Name */}
          <div className="mb-4">
            <label className="block mb-1">Subject Name</label>
            <input
              type="text"
              {...register("subject_name", {
                required: "Subject name is required",
              })}
              className="w-full border p-2 rounded"
              placeholder="e.g. Mathematics"
            />
            {errors.subject_name && (
              <p className="text-red-500 text-sm">
                {errors.subject_name.message}
              </p>
            )}

            <p className="text-red-500 text-sm">{getServerError("subject_name")}</p>
          </div>

          {/* Credit Score */}
          <div className="mb-4">
            <label className="block mb-1">Credit Score</label>
            <input
              type="number"
              {...register("credit_score", {
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

            <p className="text-red-500 text-sm">{getServerError("credit_score")}</p>
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
  );
}
