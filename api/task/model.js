// build your `Task` model here
const db = require('../../data/dbConfig')

async function find() {

    /* 
    SELECT task_id, task_description, task_notes, task_completed, project_name, project_description
        from tasks as t
        JOIN projects as p
    ON p.project_id = t.project_id; 
    */
  
    const rows = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')


    const result =  rows.map (row => {      
      if (row.task_completed) row.task_completed = true  
           else row.task_completed = false
      return row
    })
    return result
    
}

async function getById(id) {
    // return db('tasks').where('task_id', id).first();

    const row = await  db('tasks').where('task_id', id).first()
      if (row.task_completed) row.task_completed = true  
      else row.task_completed = false
    return row
  }

async function add (task) {
    const [id] = await db('tasks').insert(task);
    return getById(id);
  }

module.exports = {
  find,
  getById,
  add
}