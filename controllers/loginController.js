const loginController = {

    login: function (req, res, next) {

        res.render("security/login");
    },
    logout: async function (req, res, next) {
        req.logout();
        req.flash('success_msg', 'Você Saiu...')
        res.redirect('/')
    }
}
module.exports = loginController