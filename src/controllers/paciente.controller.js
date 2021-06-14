const Paciente = require('../schema/paciente.schema')
const { createInDB, getInfoInDB, getInfoById, updateInfoPaciente, deleteInfoPaciente } = require('../repository/abstract.repository')

const createPaciente = async (req,res) => {
  try {
    const params = req.body

    const newPaciente = await createInDB(Paciente, params)
    res.status(201).send({paciente: newPaciente, message: 'Paciente creado'})
  } catch(err) {
      res.status(500).send({ message: err.message })
  }
}

const getPacientes = async(req, res) => {
  try {
    const paciente = await getInfoInDB(Paciente)
    res.status(200).send(paciente)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

const updatePaciente = async(req, res) => {
  try {
    let paciente_id = req.params.id
    let body = req.body
    const paciente = await getInfoById(Paciente, paciente_id)
    if(!paciente) {
      throw new Error('Paciente not found')
    }
    const updated_paciente = await updateInfoPaciente(Paciente, paciente, body)
    res.status(200).send(updated_paciente)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

const deletePaciente = async(req, res) => {
  try {
    let paciente_id = req.params.id
    const paciente = await getInfoById(Paciente, paciente_id)
    if(!paciente) {
      throw new Error('Paciente not found')
    }
    const results = await deleteInfoPaciente(Paciente, paciente_id)
    res.status(200).send(results)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

module.exports = {
  createPaciente,
  getPacientes,
  updatePaciente,
  deletePaciente
}