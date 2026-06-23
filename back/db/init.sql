BEGIN;

CREATE TABLE IF NOT EXISTS public.subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL UNIQUE,
    credit_score INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS public.students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    subject_id INTEGER NOT NULL,

    CONSTRAINT fk_student_subject
        FOREIGN KEY (subject_id)
        REFERENCES public.subjects(id)
        ON DELETE CASCADE
);

COMMIT;