
const { Router } = require('express')
const pacienteController = require('../controllers/paciente.controller')

const api = Router()

api.get('/pacientes', pacienteController.getPacientes)
api.post('/pacientes', pacienteController.createPaciente)
api.put('/paciente/:id', pacienteController.updatePaciente)
api.delete('/paciente/:id', pacienteController.deletePaciente)

module.exports = api