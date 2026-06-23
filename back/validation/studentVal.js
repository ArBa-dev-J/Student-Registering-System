import { body } from "express-validator";

const studentVal = [
    body("name")
        .isString()
        .custom((body) => {
            const arr = Object.values(body);
            
            if (arr.some(a => /\d+/.test(String(a)))) {
                throw new Error("Cannot write numbers");
            }

            return true;
        })
        .withMessage(Error.message),

        body("surname")
        .isString()
        .custom((body) => {
            const arr = Object.values(body);
            
            if (arr.some(a => /\d+/.test(String(a)))) {
                throw new Error("Cannot write numbers");
            }

            return true;
        })
        .withMessage(Error.message),

        body("subject_id")
        .isNumeric()
        .withMessage("it has to be numeric"),
]

export default studentVal;