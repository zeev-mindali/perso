import React from 'react';

function Heading() {
    return (
        <div className="Box">
            <h1>Login</h1><hr/>
            <input type="text" id="uName"/><br/><br/>
            <input type="password" id="uPassword"/><br/><br/>
            <input type="button" value="login"/>

            <img alt="image for button"/>
        </div>

    )
}

export default Heading;