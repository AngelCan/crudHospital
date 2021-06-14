const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Hospital',
  tableName: 'hospitales',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid',
    },
    hospitalOrigen: {
      type: String,
    },    
    FechaInscripcion: {
        type: Date,
    },
  },
})