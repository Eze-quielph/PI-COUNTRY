const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ActivityCountries", {
    countryId:{
        type: DataTypes.ARRAY(DataTypes.STRING), // Tipo de dato ARRAY con elementos de tipo STRING
        allowNull: false,
        defaultValue: [] // Valor por defecto: un array vacío
    }
  });
};
