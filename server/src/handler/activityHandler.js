const newPost = require('../utils/PostActivity')
const {getAllActivity, getAllData} = require('../utils/dbHelper')

const postActivity = async(req, res)=>{
    const {name, dificultad, duracion, tempodara, countryId} = req.body
    const data = {name, dificultad, duracion, tempodara}
    
    try {
        const resp = await newPost(data, countryId)

        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json({error})
    }
}

const getActivity = async(req, res)=>{
    try {
        const resp = await getAllActivity()
        
        res.status(200).json(resp)
    } catch (error) {
        res.status(200).json(error)
    }
}

module.exports = {
    postActivity,
    getActivity
}