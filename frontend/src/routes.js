import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';

import Login from './pages/Login/Login';

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component= {Login}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;