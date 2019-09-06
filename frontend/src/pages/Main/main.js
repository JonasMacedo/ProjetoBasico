import React, {useState,useEffect} from 'react';
import './main.css';

import api from '../../services/api';

import logo from '../img/logo.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';


export default function Main({match}){
    
    console.log(match);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function loadUsers(){
           const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            
            //console.log(response.data);
            setUsers(response.data)
        }
    
        loadUsers();
    },[match.params.id]);

    return(
        <div className='main-container'>
            <img src={logo} alt="TinDev"></img>
            <ul>
                {users.map(user => (
                    <li>
                        <img src={user.avatar} alt={user.name}></img>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="Buttons">
                            <button type="button">
                                <img src={dislike} alt="dislike"></img>
                            </button>
                            <button type="button">
                                <img src={like} alt="like"></img>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};