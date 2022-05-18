import React, { useState } from 'react'
import Header from './components/Header'
import './css/app.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import Button from './components/Button'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Eat',
        day: '18 May at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Play',
        day: '13 June at 1:45pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Sleep',
        day: '28 July at 9:30pm',
        reminder: false
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header 
        title="Task Tracker" 
        onAddTask={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onAddTask={addTask}/> : ''}
      {tasks.length > 0 ? 
        <TaskList 
          tasks={tasks} 
          onDeleteTask={deleteTask} 
          onToggleReminder={toggleReminder}
        /> 
        : 'No tasks available' 
      }
    </div>
  );
}

export default App;
