const axios = require("axios");
const { Country } = require("../db");

/**
 * Carga los datos de los países desde una API externa y los guarda en la base de datos.
 * @returns {Promise} Una promesa que se resuelve una vez que los datos se hayan cargado correctamente.
 * @throws {Error} Si ocurre un error al cargar los países a la base de datos.
 */
const loadDb = async () => {
  try {
    const dbCountries = await Country.findAll();

    if (dbCountries.length === 0) {
      const response = await axios.get(`http://localhost:5000/countries`);
      const data = response.data;
      const infApi = data.map((pais) => ({
        name: pais.name.common,
        flag: pais.flags.svg,
        continente: pais.region,
        capital: pais.capital ? pais.capital[0] : "capital",
        subregion: pais.subregion ? pais.subregion : "subregion",
        area: pais.area,
        poblacion: pais.population,
      }));

      for (const countryData of infApi) {
        await Country.findOrCreate({
          where: { name: countryData.name },
          defaults: countryData,
        });
      }

      console.log("La base de datos ha sido actualizada");
    } else {
      console.log("La base de datos ya contiene los países");
    }
  } catch (error) {
    console.error("Error al cargar los países a la base de datos:", error);
    throw error;
  }
};

module.exports = loadDb;
