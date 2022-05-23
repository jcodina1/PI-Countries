const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
        id:{
            type:DataTypes.INTEGER,
<<<<<<< HEAD
            primaryKey: true
=======
            primarykey: true
>>>>>>> 338b71fe3ae3358f110117a9ebd655086cf442ae
        },
        name:{
            type: DataTypes.STRING
        },
        difficulty:{
            type:DataTypes.INTEGER,
            validate:{
                max:5,
                min:1
            }
        },
        duration:{
            type:DataTypes.FLOAT
        },
        season:{
            type:DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
        }
});
};