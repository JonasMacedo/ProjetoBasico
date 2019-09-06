import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/main';

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component= {Login}></Route>
                <Route path="/devs/:id" component= {Main} ></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;