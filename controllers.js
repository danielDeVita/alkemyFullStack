const controllers = {
    home: (req, res) => {
        res.render("home")
    },
    formProcess: (req, res)=>{
        res.json(req.body)
        console.log(req.body)
    }
};

module.exports = controllers