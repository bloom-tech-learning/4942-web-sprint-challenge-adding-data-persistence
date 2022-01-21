// build your `Project` model here
const db = require('../../data/dbConfig')

async function find() {    
  
    const rows = await db('projects')
      .select('*')
    const result =  rows.map (row => {      
      if (row.project_completed) row.project_completed = true  
           else row.project_completed = false
      return row
    })
    return result
    
}

async function getById(id) {
    // return db('projects').where('project_id', id).first();

    const row = await  db('projects').where('project_id', id).first()
      if (row.project_completed) row.project_completed = true  
      else row.project_completed = false
    return row
  }

async function add (project) {
    const [id] = await db('projects').insert(project);
    return getById(id);
  }

module.exports = {
  find,
  getById,
  add
}