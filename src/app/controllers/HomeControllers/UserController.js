class UserController {
    index(req, res) {
        res.send(`Username is ${req.params.name} `);
    }
}

module.exports = new UserController();
