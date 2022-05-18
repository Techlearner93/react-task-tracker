import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({ title }) {

    const onClick = () => {
        alert("You Clicked")
    }
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                color="green" 
                text="Add" 
                onClick={onClick}
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
