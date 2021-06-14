const Hospital = require('../schema/hospital.schema')
const { createInDB, getInfoInDB } = require('../repository/abstract.repository')

const createHospital = async (req,res) => {
  try {
    const params = req.body

    const newHospital = await createInDB(Hospital, params)
    res.status(201).send({hospital: newHospital, message: 'Hospital creado'})
  } catch(err) {
      res.status(500).send({ message: err.message })
  }
}

const getHospital = async(req, res) => {
  try {
    const hospital = await getInfoInDB(Hospital)
    res.status(200).send(hospital)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

module.exports = {
  createHospital,
  getHospital
}