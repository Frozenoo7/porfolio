import React from 'react'

function Button({title,icon}) {
    return (
        <button className="btn"><span>{title}&nbsp;{icon}</span></button>
    )
}

export default Button
