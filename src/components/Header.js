import React from 'react'
import PropTypes from 'prop-types'

export default function Header({ title }) {

    return (
        <header>
            <h1>{title}</h1>
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
