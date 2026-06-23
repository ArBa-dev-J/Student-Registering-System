import { body } from "express-validator";

const subjectVal = [
    body("subject_name")
        .isString()
        .custom((body) => {
            const arr = Object.values(body);
            
            if (arr.some(a => /\d+/.test(String(a)))) {
                throw new Error("Cannot write numbers");
            }

            return true;
        })
        .withMessage(Error.message),

  
    body("credit_score")
        .isNumeric()
        // check number between 0 and 5
        .custom((number) => {
            if (number >= 0 && number <= 100) return true;
            else throw new Error("Credit score cannot be lower than 0 and higher than 100");
        })
        .withMessage(Error.message),

]

export default subjectVal;