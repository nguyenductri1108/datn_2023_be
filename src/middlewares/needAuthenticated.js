const UserModel = require("../app/models/User");
const jwt = require("jsonwebtoken");

const needAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        next(new Error("Token not found"));
        return;
    }

    const jwtToken = token.split(" ")[1];

    const data = jwt.verify(jwtToken, process.env.SECRET_KEY);

    const { userID } = data;

    if (!userID) {
        next(new Error("User's ID not found"));
        return;
    }

    const existedUser = await UserModel.findById(userID);

    if (!existedUser) {
        next(new Error("User not found"));
        return;
    }

    req.user = existedUser;

    next();
};

module.exports = needAuthenticated;
