import React from 'react'

function Divider(props) {

    const bgImage = {
        //backgroundImage: 'url('+props.imgsrc+')',
      //  backgroundRepeat: 'no-repeat',
       // backgroundSize: 'cover',
        width: '100vw',
        height: '20vw',
        color: props.textColor,
        backgroundColor: props.color,
    }
    return(
        <div style={bgImage} className=" d-none d-md-flex justify-content-center align-items-center p-5">
            <h3 className="dividerText">{props.text}</h3>
        </div>
    )
    
}
export default Divider