import { sql } from "../db_connection.js";

// post new subject

export const addNewCityM = async (data) => {

    const newCity = await sql`
    INSERT INTO subjects (subject_name,  credit_score)
    VALUES (${data.subject_name.toString()}, ${Number(data.credit_score)})
    RETURNING *;
    `

    return newCity;
}


// get city

export const doesSubjectExistM = async (data) => {

    const exists = await sql`
    SELECT subject_name FROM subjects
    WHERE subject_name = ${data.subject_name};
    `;

    return exists[0];
}