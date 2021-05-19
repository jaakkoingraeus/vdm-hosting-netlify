import React from 'react'

function Divider(props) {

    const bgImage = {
        width: '100vw',
        height: '20vw',
        color: props.textColor,
        backgroundColor: props.color,
        padding: '0vw 10vw'
    }
    return(
        <div style={bgImage} className=" d-none d-md-flex flex-column justify-content-center align-items-center">
            <h1 className="dividerText">{props.text}</h1>
        </div>
    )
    
}
export default Divider