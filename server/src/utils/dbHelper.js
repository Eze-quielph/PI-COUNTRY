const { Country, Activity } = require("../db");

const getAllData = async () => {
    try {
      const allCountries = await Country.findAll();
      // Realiza otras consultas si es necesario y combina los resultados
  
      return allCountries; // Retorna los datos obtenidos
    } catch (error) {
      throw new Error("Error al obtener los datos de la base de datos");
    }
  };

const getAllActivity = async()=>{
  try {
    const allActivity = await Activity.findAll();
    
    return allActivity; 
  } catch (error) {
    throw new Error("Error al obtener los datos de la base de datos");
  }
}

  module.exports = {getAllData, getAllActivity};