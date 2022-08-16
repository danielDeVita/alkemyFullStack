const db = require("./src/database/models");

const controllers = {
    home: (req, res) => {
        db.alkemyFullStack.findAll({
            order: [["id", "DESC"]],
            limit: 10,
        })
            .then((totalData) => {

                let ingresos = [];
                let egresos = [];

                for (let i = 0; i < totalData.length; i++) {
                    if (totalData[i].tipo == "Ingreso") {
                        ingresos.push(totalData[i].monto)
                    } else {
                        egresos.push(totalData[i].monto)
                    }
                }

                let totalIngresos = ingresos.reduce((accum, i) => accum + i, 0);
                let totalEgresos = egresos.reduce((accum, i) => accum + i, 0)

                let balance = totalIngresos - totalEgresos;

                return res.render("home", { totalData, balance })
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
                if (!entry) {
                    res.send("404 not found")
                } else
                    return res.render("edit", { entry })
            })
            .catch(error => console.error(error))
    },
    editProcess: (req, res) => {
        db.alkemyFullStack.update({
            concepto: req.body.concepto,
            monto: req.body.monto,
            fecha: req.body.fecha,
        }, {
            where: { id: req.params.id }
        })
            .then(() => {
                return res.redirect("/")
            })
    },
    delete: (req, res) => {
        db.alkemyFullStack.destroy({
            where: { id: req.params.id }
        })
            .then(() => {
                return res.redirect("/")
            })
            .catch(error => console.error(error))
    },
    api: (req, res) => {
        db.alkemyFullStack.findAll()
            .then(entries => res.status(200).json(entries))
    }
};

module.exports = controllers