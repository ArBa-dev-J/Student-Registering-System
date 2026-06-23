function MainPage() {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
                Student Registration System
            </h1>

            <p className="text-gray-600 mb-8">
                Choose an option below
            </p>

            <div className="flex gap-6">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                    Add New Student
                </button>

                <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
                    Add New Subject
                </button>
            </div>
        </div>
    );
}

export default MainPage;