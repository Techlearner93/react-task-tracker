import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    const {
        color,
        text,
        onClick
    } = props

    return(
        <div>
            <button 
                className="btn"
                style={{ backgroundColor:color }}
                onClick={onClick}
                >{text}
            </button>
        </div>
    )

    Button.defaultProps = {
        color: "steelblue"
    }

    Button.propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,
        onClick: PropTypes.func
    }
}