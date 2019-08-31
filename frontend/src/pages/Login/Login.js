import React from 'react';

import './style.css';
import logo from '../img/logo.svg';

export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="TinDev"/>
                <input
                    placeholder="Usuario GitHub"

                ></input>
                <button>Enviar</button>

            </form>
        </div>
    ); 
}
