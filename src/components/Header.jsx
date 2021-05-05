import React from 'react'

function Header(props) {

    const borderBottom = {
        borderColor: props.borderColor
    }

    return(
    <div className="header">
        <h1 style={borderBottom}>{props.text}</h1>
    </div>
    )
}
export default Header