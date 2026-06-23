import express from "express"
import validate from "../validation/validation.js";
import subjectVal from "../validation/subjectVal.js";
import capitalLetter from "../middleWares/capitalLetter.js";
import { getAllSubjects } from "../controller/subjectController.js";
import { addNewSubjectC } from "../controller/subjectController.js"


const subjectRoutes = express.Router();

// subject routes

subjectRoutes.post("/newSubjects", subjectVal, validate, capitalLetter, addNewSubjectC); 
subjectRoutes.get("/allSubjects", getAllSubjects);

export default subjectRoutes;