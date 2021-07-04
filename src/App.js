import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Welcome to my Task Tracker!',
      day: 'This is where the date is Displayed!',
      reminder: false,
     
  },
  {
      id: 2,
      text: 'This task is highlighted in Green',
      day: 'Add more tasks by selecting the Add button on the top left and delete them using the x icon next to it.',
      reminder: true,
  },
  {
      id: 3,
      text: 'That is all, (you can also delete this one too.)',
      day: 'Made July 3rd, 2021',
      reminder: false,
  }
  ])

 useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks ()
    setTasks(tasksFromServer)
  }
  getTasks()
 }, []) 

 //Fetch Data
 const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

// Adding Tasks
const addTask =(task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task } 
  setTasks ([...tasks, newTask])

}

//Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}


// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: 
    !task.reminder } : task
  )
)
}


  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} /> 
      : 'No Tasks To Show'}
    </div>
  )
}

export default App
