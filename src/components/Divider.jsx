import React from 'react'

function Divider(props) {

    const bgImage = {
        backgroundImage: 'url('+props.imgsrc+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '20vw',
        color: '#FFFFFF'
    }
    return(
        <div style={bgImage} className="d-flex justify-content-center align-items-center">
            <h1 className="dividerText">{props.text}</h1>
        </div>
    )
    
}
export default Divider