import React, {useState}from 'react';

import './style.css';
import logo from '../img/logo.svg';
import api from '../../services/api';

export default function Login({history}){
    
    const [userName, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        //Buscando usario do servidor.
        const response = await api.post('/devs',{
            username: userName,
        });

        const {_id} = response.data;

        console.log(_id);  
        
        history.push(`/devs/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit = {handleSubmit}>
                <img src={logo} alt="TinDev"/>
                <input
                    placeholder="Usuario GitHub"
                    value ={userName}
                    onChange = { e =>setUsername(e.target.value)}
                ></input>
                <button type="submit">Enviar</button>

            </form>
        </div>
    ); 
}
