import jwt from "jsonwebtoken";

const { TOKEN_KEY } = process.env;

// authentication middleware
const authenticate = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded.user;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

export default authenticate;