import React, {useState,useEffect} from 'react';
import './main.css';

import api from '../../services/api';

import logo from '../img/logo.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';


export default function Main({match}){
    
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function loadUsers(){
           const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            console.log('esta no main.');
            setUsers(response.data)
        }
    
        loadUsers();
    },[match.params.id]);

    async function actionLike(){
        console.log("gostou");
    }

    async function actionDeslike(){
        console.log("Deslike");
    }

    return(
        <div className='main-container'>
            <img src={logo} alt="TinDev"></img>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name}></img>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="Buttons">
                            <button type="button" onClick={()=>actionDeslike(user.id)}>
                                <img src={dislike} alt="dislike"></img>
                            </button>
                            <button type="button" onClick={()=>actionLike(user.id)}>
                                <img src={like} alt="like"></img>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};