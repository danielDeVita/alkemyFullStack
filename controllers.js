const db = require("./src/database/models")

const controllers = {
    home: (req, res) => {
        res.render("home")
    },
    formProcess: (req, res)=>{
        //res.json(req.body)
        //console.log(req.body)
        db.alkemyFullStack.create({
            concepto: req.body.concepto,
            monto: req.body.monto,
            fecha: req.body.fecha,
            tipo: req.body.tipo
        })
        .then (()=>{
            return res.redirect("/");
        })
    }
};

module.exports = controllers