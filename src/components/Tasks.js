import React from 'react'

const tasks = [
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
]

export default function Tasks() {
    return (
        <>
            {tasks.map((task) =>(
                <h3 key={task.id}>{task.id}. {task.text}</h3>
            ))}
        </>
    )
}