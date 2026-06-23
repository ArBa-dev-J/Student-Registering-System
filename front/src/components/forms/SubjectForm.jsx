import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function SubjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("New Subject:", data);

    // API call can go here
    // await fetch("/api/subjects", { method: "POST", body: JSON.stringify(data) });

    reset();
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
            {errors.subjectName && (
              <p className="text-red-500 text-sm">
                {errors.subjectName.message}
              </p>
            )}
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
            {errors.creditScore && (
              <p className="text-red-500 text-sm">
                {errors.creditScore.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Subject
          </button>
        </form>
      </div>
    </main>
  );
}
