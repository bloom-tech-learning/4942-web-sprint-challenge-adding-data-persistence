// build your `Resource` model here
const db = require('../../data/dbConfig')

async function find() {
    return db('resources');
}

function getById(id) {
    return db('resources').where('resource_id', id).first();
  }

async function add (resource) {
    const [id] = await db('resources').insert(resource);
    return getById(id);
  }

module.exports = {
  find,
  getById,
  add
}
