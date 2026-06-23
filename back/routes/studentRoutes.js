import express from "express";
import { newStudentC } from "../controller/studentController.js";
import validate from "../validation/validation.js";
import studentVal from "../validation/studentVal.js";

const studentRoutes = express.Router();

// student routes

studentRoutes.post("/newStudent", studentVal, validate, newStudentC);

export default studentRoutes;
