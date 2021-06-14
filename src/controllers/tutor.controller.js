const Tutor = require('../schema/tutor.schema')
const { createInDB, getInfoInDB } = require('../repository/abstract.repository')

const createTutor = async (req,res) => {
  try {
    const params = req.body

    const newTutor = await createInDB(Tutor, params)
    res.status(201).send({tutor: newTutor, message: 'Tutor creado'})
  } catch(err) {
      res.status(500).send({ message: err.message })
  }
}

const getTutor = async(req, res) => {
  try {
    const tutor = await getInfoInDB(Tutor)
    res.status(200).send(tutor)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

module.exports = {
  createTutor,
  getTutor
}