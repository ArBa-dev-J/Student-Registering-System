import { postNewStudentM } from "../model/studentModel.js";
import { getSubjectByIdM } from "../model/subjectModel.js";

export const newStudentC = async (req, res, next) => {
  try {
    const newStudent = req.body;
    console.log(newStudent);

    if (!newStudent.name || !newStudent.surname || !newStudent.subject_id)
      return res.status(400).json({
        status: "fail",
        message: "not enough info",
      });

    const id = newStudent.subject_id;

    const exists = await getSubjectByIdM(id);

    if (exists == 0)
      return res.status(404).json({
        status: "fail",
        message: "This subject doesn't exist",
      });

    const addNewStudent = await postNewStudentM(newStudent);

    if (!addNewStudent)
      return res.status(424).json({
        status: "fail",
        message: "New place was not posted",
      });

    return res.status(201).json({
      status: "success",
      data: addNewStudent,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `${error}`,
    });
  }
};
