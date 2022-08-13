const db = require("./src/database/models")

const controllers = {
    home: (req, res) => {
        db.alkemyFullStack.findAll()
            .then((totalData) => {
                return res.render("home", { totalData })
            })
    },
    formProcess: (req, res) => {
        db.alkemyFullStack.create({
            concepto: req.body.concepto,
            monto: req.body.monto,
            fecha: req.body.fecha,
            tipo: req.body.tipo
        })
            .then(() => {
                return res.redirect("/");
            })
    }
};

module.exports = controllers