import React from 'react'
//returns a header with a nice colored underline
/*
* props.borderColor - border color in hex or rgb
* props.text - header text as string
*/
function Header(props) {

    const borderBottom = {
        borderStyle:'solid',
        borderWidth: '0px 0px 4px 0px',
        borderColor: props.borderColor,
        width: 'auto',
        maxWidth: 'max-content',
        marginBottom: '30px'
    }

    return(
    <div className="header">
        <h1 style={borderBottom}>{props.text}</h1>
    </div>
    )
}
export default Header