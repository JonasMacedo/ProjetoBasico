import React from 'react';

import logo from '../img/logo.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

export default function index({match}){
    return(
        <div className='main-container'>
            <img src={logo} alt="TinDev"></img>
            <ul>
                <li>
                    <img src="" alt="avatar dev"></img>
                    <footer>
                        <strong>Nome do usuario.</strong>
                        <p>Bio do usuario.</p>
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
            </ul>
        </div>
    );
        
}