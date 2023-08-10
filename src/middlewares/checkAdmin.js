const checkAdmin = async (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    next(new Error("Unauthorized"));
    return;
  }

  next();
};

module.exports = checkAdmin;
