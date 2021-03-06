const { getRepository } = require('typeorm')

const createInDB = async (schema, params) => {
  try {
    const newData = getRepository(schema).create(params)
    const data = await getRepository(schema).save(newData)
    return data
  } catch(err) {
    console.log(err.message)
  }
}

const getInfoInDB = async (schema) => {
  try {
    const data = await getRepository(schema).find()
    return data
  } catch(err) {
    console.log(err.message)
  }
}

const getInfoById = async (schema, id) => {
  try {
    const data = await getRepository(schema).findOne(id)
    return data
  } catch(err) {
    console.log(err.message)
  }
}

const updateInfoPaciente = async (schema, data, new_info) => {
  try {
    await getRepository(schema).merge(data, new_info)
    const new_data = await getRepository(schema).save(data)
    return new_data
  } catch(err) {
    console.log(err.message)
  }
}

const deleteInfoPaciente = async (schema, id) => {
  try {
    const info = await getRepository(schema).delete(id)
    return info
  } catch(err) {
    console.log(err.message)
  }
}



module.exports = {
  createInDB,
  getInfoInDB,
  getInfoById,
  updateInfoPaciente,
  deleteInfoPaciente
}