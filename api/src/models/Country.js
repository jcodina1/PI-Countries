const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type:DataTypes.STRING(3),
<<<<<<< HEAD
      allowNull:false,
      primaryKey: true
=======
      allowNull:false
>>>>>>> 338b71fe3ae3358f110117a9ebd655086cf442ae
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
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subRegion:{
      type:DataTypes.STRING,
      
    },
    area:{
      type:DataTypes.STRING,
      
    },
<<<<<<< HEAD
    population:{
=======
    poblacion:{
>>>>>>> 338b71fe3ae3358f110117a9ebd655086cf442ae
      type:DataTypes.STRING,
      
    }
    
  });
};
