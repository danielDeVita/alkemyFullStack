module.exports = (sequelize, dataTypes) => {
    let alias = "alkemyFullStack";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        concepto: {
            type: dataTypes.STRING(30)
        },
        monto: {
            type: dataTypes.FLOAT(50)
        },
        fecha: {
            type: dataTypes.DATE,
        },
        tipo: {
            type: dataTypes.STRING(15) 
        }
    };

    let config = {
        tableName : "alkemyFullStack",
        timestamps: false
    };

    const alkemyFullStack = sequelize.define(alias, cols, config)
    return alkemyFullStack;
}