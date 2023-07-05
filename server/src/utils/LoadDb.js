const axios = require("axios");
const { Country } = require("../db");

const loadDb = async () => {
  try {
    const dbCountries = await Country.findAll();

    if (dbCountries.length === 0) {
      const response = await axios.get(`http://localhost:5000/countries`);
      const data = response.data;
      const infApi = await data.map((pais) => {
        return {
          name: pais.name.common,
          flag: pais.flags.svg,
          continente: pais.region,
          capital: pais.capital ? pais.capital[0] : 'capital',
          subregion: pais.subregion ? pais.subregion : 'subregion',
          area: pais.area,
          poblacion: pais.population,
        };
      });

      for (let i = 0; i < infApi.length; i++) {
        await Country.findOrCreate({
          where: { name: infApi[i].name },
          defaults: infApi[i],
        });
      }

      console.log("La base de datos ha sido actualizada");
    } else {
      console.log("La base de datos ya contiene los países");
    }
  } catch (error) {
    console.error("Error al cargar los países a la base de datos:", error);
  }
};

module.exports = loadDb;
