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
      throw new Error("No se encontró ningún país con el ID especificado");
    }

    return country;
  } catch (error) {
   
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
    if (!name) {
      throw new Error("No se proporcionó un nombre válido");
    }

    const countries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });

    if (countries.length === 0) {
      throw new Error("No se encontró ningún país con ese nombre");
    }

    return countries;
  } catch (error) {
    throw error;
  }
};


module.exports = { findCountryById, getByName };
