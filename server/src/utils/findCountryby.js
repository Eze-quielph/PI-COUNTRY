const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const findCountryById = async (id) => {
  try {
    const country = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
          through: { attributes: []},
        },
      ],
      attributes: { exclude: ["CountryActivity"] }
    });

    if (!country) {
      console.log("No se encontró ningún país con el ID especificado");
      return null;
    }

    console.log("País encontrado:");
    console.log(country.toJSON());
    return country;
  } catch (error) {
    console.error("Error al buscar el país por ID:", error);
    throw error;
  }
};

const getByName= async(name)=>{
  try {
   if(name){
    const country = await Country.findAll({
      where:
      {name: {[Op.iLike]: `%${name}%`}}
    })
    return country;
   }
    else{
      throw new Error(`No me mandaste un name valido`)
    }
  
  } catch (error) {
    console.error("Error al buscar el país por nombre:", error);
    throw error;
  }
}

module.exports = {findCountryById, getByName}