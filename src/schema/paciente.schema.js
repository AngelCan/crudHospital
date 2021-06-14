const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Paciente',
  tableName: 'pacientes',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid',
    },
    nombreCompleto: {
      type: String,
    },
    genero: {
      type: String,
    },
    ciudadOrigen:{
        type: String,
    },
    edad: {
        type: Number,
    },
    fechaNacimiento:{
        type: Date,
    }
  },
})