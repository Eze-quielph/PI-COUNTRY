const {Activity} = require('../db')

const newPost = async(data, nameId)=>{
    const newActivity = await Activity.create({
        name:data.name,
        dificultad: data.dificultad,
        duracion:data.duracion,
        tempodara: data.tempodara
    })

    await newActivity.setCountries(nameId)
    return newActivity
}

  

module.exports = newPost