const jwt = require("jsonwebtoken")
const { promisify } = require("util")

const db  = require("./dbConnection")

exports.isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization

    try {

        if (!token) {
            return res.status(400).json({
                message: "Please send token"
            })
        }
        const decryptedResult = await promisify(jwt.verify)(token, 'Resham')
        const id = decryptedResult.id;
        const sql = "SELECT * FROM signup WHERE `id`= ?";
        const userExist = db.query(sql, [id], (err, data) => {
            if (err) {
                console.error("Error executing SQL query:", err);
                return res.json("error");
            }
            else (data.length > 0)
            {
                req.user=data[0]
                next();
            };
        })
    } catch (err) {
        console.log(err)
    }
    // if (userExist.lenth == 0) {
    //     res.send("User token doesn't exist")
    // } else {
    //     req.user = userExist;
    //     req.userId = userExist[0].id
    //     next();
    // }
}