const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Tutor',
  tableName: 'tutores',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid',
    },
    tutorNombre: {
      type: String,
    },    
    telefono: {
        type: Number,
    },
  },
})