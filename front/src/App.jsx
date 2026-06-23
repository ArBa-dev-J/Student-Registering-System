import MainPage from "./components/pages/MainPage";
import SubjectForm from "./components/forms/SubjectForm";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>

        {/* MAIN page route */}

        <Route path="/" element={<MainPage />}  />

        {/* Form routes */}
        <Route path="/newSubject" element={<SubjectForm/>} />

      </Routes>
    </>
  );
}

export default App;
