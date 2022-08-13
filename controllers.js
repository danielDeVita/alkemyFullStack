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
            .catch(error => console.error(error));
    },
    editView: (req, res) => {
        db.alkemyFullStack.findByPk(req.params.id)
            .then((entry) => {
                return res.render("edit", { entry })
            })
            .catch(error => console.error(error))
    },
    editProcess: (req, res)=> {
        db.alkemyFullStack.update({
            concepto: req.body.concepto,
            monto: req.body.monto,
            fecha: req.body.fecha,
        })
        .then(()=>{
            return res.redirect("/")
        })
    }
};

module.exports = controllers