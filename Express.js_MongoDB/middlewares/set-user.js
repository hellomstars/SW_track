const users = require('../data/users');
const admins = require('../data/admins');

const setUser = (type) => (req, res, next) => {
    const { userName } = req.query;
    if (type === "admin") {
        req.user = admins[userName];
        next();
        return;

    }
    
    req.user = users[userName];
    next();
}


module.exports = setUser;