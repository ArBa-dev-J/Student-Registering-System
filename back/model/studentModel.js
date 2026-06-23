import { sql } from "../db_connection.js";

// post new student

export const postNewStudentM = async (newStudent) => {
const {name, surname, subject_id} = newStudent;

 const upload = await sql`
    INSERT INTO students (name, surname, subject_id)
    VALUES (${name}, ${surname}, ${Number(subject_id)})
    RETURNING *;
    `;

    return upload[0];
}