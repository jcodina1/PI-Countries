const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        tipo:{
            type:DataTypes.STRING
        },
        name:{
            type: DataTypes.STRING
        },
        difficulty:{
            type:DataTypes.INTEGER,
            
        },
        duration:{
            type:DataTypes.STRING,
            
        },
        season:{
            type:DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
        },
        
},{ timestamps: false });
};