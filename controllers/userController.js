


const userController = {

    userView: function (req, res, next) {
     try {
        res.render('users/register')
          
        } catch(err) {
            res.status(404).json("página não encontrada...")
            console.log(err)
        }
        return next()
    },
}

module.exports = userController