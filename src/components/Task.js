import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Task(props) {
    const {
        task,
        onDeleteTask,
        onToggleReminder
    } = props

    return (
        <div 
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggleReminder(task.id)}
        >
            <h3>
                {task.text} 
                <FaTimes style={{ 
                    color: 'red', 
                    cursor: 'pointer'
                }} 
                onClick={() => onDeleteTask(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}