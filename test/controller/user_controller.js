const User = require('../model/user');


insertUser = function (req, res, next) {
    const user = new User({
        userName: req.body.username,
        userMail: req.body.usermail,

    });
    user.save((error, resualt) => {
        if (error) {
            console.log(error);
            res.redirect('/');
            return;
        }
        console.log(resualt);
        res.redirect('/getusers');

    })
}

getUsers = function (req, res, next) {
    User.find({}, 'userName userMail', (error, resualt) => {
        if (error) {
            console.log(error);
            res.redirect('/');

        }
        console.log(resualt);
        res.render('index', { items: resualt });

    })
}
updateUser = function (req, res, next) {
    const ID = req.body.id;
    const updateUser = {
        userName: req.body.username,
        userMail: req.body.usermail
    }
    User.updateOne({ _id: ID }, { $set: updateUser }, (error, resualt) => {
        if (error) {
            console.log(error);
            res.redirect('/');
            return;

        }
        console.log(resualt);
        res.redirect('/getusers');
    })
}

deleteUser = function (req, res, next) {
    const ID = req.body.id;
    User.deleteOne({ _id: ID }, (error, resualt) => {
        if (error) {
            console.log(error);
            res.redirect('/');
            return;
        }
        console.log(resualt);
        res.redirect('/getusers');
    })
}
module.exports = {
    insertUser: insertUser,
    getUsers: getUsers,
    updateUser: updateUser,
    deleteUser, deleteUser
}