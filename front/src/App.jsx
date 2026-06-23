import MainPage from "./components/pages/MainPage";
import SubjectForm from "./components/forms/SubjectForm";
import StudentForm from "./components/forms/studentForm";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>

        {/* MAIN page route */}

        <Route path="/" element={<MainPage />}  />

        {/* Form routes */}
        <Route path="/newSubject" element={<SubjectForm/>} />
        <Route path="/newStudent" element={<StudentForm/>} />

      </Routes>
    </>
  );
}

export default App;
