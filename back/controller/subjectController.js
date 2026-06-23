import { addNewSubjectM, doesSubjectExistM, getAllSubjectsM } from "../model/subjectModel.js";

// insert new subject

export const addNewSubjectC = async (req, res) => {
  try {
    const data = req.body;
    data.subject_name = req.capitalizedName;

    // simple data check if exists

    if (!data.credit_score || !data.subject_name)
      return res.status(400).json({
        status: "fail",
        message: "not enough info",
      });

    // checks if city doesnt exist already

    const exists = await doesSubjectExistM(data);
    if (exists)
      return res.status(409).json({
        status: "fail",
        message: "This subject already exists",
      });

    // post new city
    const post = await addNewSubjectM(data);

    res.status(201).json({
      status: "success",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `${error}`,
    });
  }
};

// get all subjects

export const getAllSubjects = async (req, res) => {
  try {
    const response = await getAllSubjectsM();

    if (response == 0)
      return res.status(404).json({
        status: "fail",
        message: "No subjects found",
      });

    // change order to latest on top

    const orderdArray = () => {
      return response.sort((a, b) => b.id - a.id);
    };

    return res.status(200).json({
      status: "success",
      data: orderdArray(),
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `${error}`,
    });
  }
};
