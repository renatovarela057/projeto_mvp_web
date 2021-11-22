import React from "react";
import {BrowserRouter,Switch} from "react-router-dom"

import Route from './Route';

import Login from '../pages/login';
import Chat from '../pages/chat';
import About from '../pages/about';
import Home from '../pages/home';
import Pagina404 from '../pages/pagina404';

const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact isPrivate />
          <Route component={Login} path="/login"/>
          <Route component={Home} path="/main" isPrivate/>
          <Route component={About} path="/about" isPrivate/>
          <Route component={Chat} path="/chat" isPrivate/>
          <Route component={Pagina404} path="*" isPrivate/>
        </Switch>
      </BrowserRouter>
    )
}

export default Routes