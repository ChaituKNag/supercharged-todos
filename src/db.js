import Dexie from 'dexie'

const db = new Dexie('todoDB')

db.version(1).stores({
    todos: '++id, text, completed'
})
db.todos.clear();
db.todos.add({ text: "Learn Javascript", completed: false })
db.todos.add({ text: "Build a project - Ex: To do list", completed: false })
db.todos.add({ text: "Learn ReactJs", completed: false })

export default db;