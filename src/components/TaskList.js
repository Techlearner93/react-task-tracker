import React from 'react'
import Task from './Task'

export default function TaskList(props) {
    const {
        tasks,
        onDeleteTask,
        onToggleReminder
    } = props

    return (
        <>
            {tasks.map((task) =>(
                <Task 
                    key={task.id} 
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onToggleReminder={onToggleReminder} />
            ))}
        </>
    )
}