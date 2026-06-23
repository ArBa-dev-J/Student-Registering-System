const capitalLetter = (req, res, next) => {

    try {
        const data = req.body;


        // converts city name's first letter to upper case

        const firstUpperCase = data.subject_name.charAt(0).toLocaleUpperCase();
        const remainingLetters = data.subject_name.slice(1);
        const fullString = firstUpperCase + remainingLetters;

        req.capitalizedName = fullString;

        next();
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: `${error}`,
        })
    }
}

export default capitalLetter;