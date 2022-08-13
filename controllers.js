const db = require("./src/database/models")

const controllers = {
    home: (req, res) => {
        db.alkemyFullStack.findAll()
            .then((totalData) => {
                return res.render("home", { totalData })
            })
            .catch(error => console.error(error));
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
            .catch(error=>console.error(error));
    }
};

module.exports = controllers