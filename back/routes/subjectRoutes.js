import express from "express"
import validate from "../validation/validation.js";
import subjectVal from "../validation/subjectVal.js";
import capitalLetter from "../middleWares/capitalLetter.js";
import { addNewSubjectC } from "../controller/subjectController.js"


const subjectRoutes = express.Router();

// subject routes

subjectRoutes.post("/newSubjects", subjectVal, validate, capitalLetter, addNewSubjectC); 

export default subjectRoutes;