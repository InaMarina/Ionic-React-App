import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import MakePage from '../pages/MakePage'

const NotLogged: React.FC = () => {


      return(
        <IonApp>
          <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/login" component={Login} exact={true} />
                <Route path="/signup" component={SignUp} exact={true} />
                <Route path="/" component={Home} exact={true} />
              </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
        )
};

export default NotLogged;
