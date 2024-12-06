import React from "react";

const time = new Date().getFullYear();


function Footer(){
    return <div>
        <footer>
            <p> copyright ©️{time}</p>
        </footer>
    </div>
}

export default Footer;