const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type:DataTypes.STRING(3),
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false
    },
    continent:{
      
      allowNull:false
    }
  });
};
