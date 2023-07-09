const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

/**
 * Busca un país por su ID y devuelve el resultado.
 * @param {number} id - El ID del país a buscar.
 * @returns {Promise} Una promesa que se resuelve con el país encontrado.
 * @throws {Error} Si ocurre un error al buscar el país por ID.
 */
const findCountryById = async (id) => {
  try {
    const country = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
          through: { attributes: [] },
        },
      ],
      attributes: { exclude: ["CountryActivity"] },
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

/**
 * Busca países por nombre y devuelve los resultados.
 * @param {string} name - El nombre del país a buscar.
 * @returns {Promise} Una promesa que se resuelve con los países encontrados.
 * @throws {Error} Si ocurre un error al buscar los países por nombre.
 */
const getByName = async (name) => {
  try {
    if (name) {
      const countries = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      return countries;
    } else {
      throw new Error("No se proporcionó un nombre válido");
    }
  } catch (error) {
    console.error("Error al buscar el país por nombre:", error);
    throw error;
  }
};

module.exports = { findCountryById, getByName };
