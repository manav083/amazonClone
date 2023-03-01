const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["Authorization"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, proces.env.Token_key);
        req.user = decoded;
    } catch (e) {
        res.status(401).send("Invalid token. Unauthorized Access")
    }
    return next();
}

module.exports = verifyToken;