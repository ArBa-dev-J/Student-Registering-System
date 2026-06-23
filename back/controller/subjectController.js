import { addNewSubjectM, doesSubjectExistM } from "../model/subjectModel.js";

// insert new student

export const addNewSubjectC = async (req, res) => {
  try {
   const data = req.body;
   data.subject_name = req.capitalizedName;

    // simple data check if exists


    if (!data.credit_score || !data.subject_name) return res.status(400).json({
            status: "fail",
            message: "not enough info"
        })

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
