const { Activity } = require("../db");

const deleteIdActivity = async (id) => {
  const DeleteId = await Activity.destroy({ where: { id: id } });
  if(DeleteId){
    return id
  }
  return "No se encontro"
};

module.exports = deleteIdActivity;
