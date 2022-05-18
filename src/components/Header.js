import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header(props) {
    const {
        title,
        onAddTask,
        showAdd
    } = props
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAddTask}
            />
        </header>
    )
}

Header.defaultProps = {
    title: "Default Props Task Tracker"
}

// propTypes allows you to define what data type you want for the props passed
// .isRequired makes it mandatory for a prop to be passed, else an error will be thrown
Header.propTypes = {
    title: PropTypes.string.isRequired
}
