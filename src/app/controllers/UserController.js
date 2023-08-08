const User = require("../models/User");
const { ObjectId } = require("mongodb");

class BookController {
    getUserData(req, res, next) {
        User.findById(req.params.id)
            .then((userData) => {
                const securedDate = JSON.parse(JSON.stringify(userData));
                delete securedDate.password;
                res.send({ data: securedDate });
            })
            .catch(next);
    }

    updateUserData(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    }
}

module.exports = new BookController();
