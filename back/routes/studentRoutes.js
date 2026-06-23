import express from "express"
import { newStudentC } from "../controller/studentController.js";
import validate from "../validation/validation.js";

const studentRoutes = express.Router();


// student routes

studentRoutes.post("/newStudent", newStudentC);

export default studentRoutes;