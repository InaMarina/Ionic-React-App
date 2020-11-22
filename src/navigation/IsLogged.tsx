import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import ListsPage from '../pages/ListsPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import MakePage from '../pages/MakePage'

const IsLogged: React.FC = () => {


      return(
        <IonApp>
          <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/listspage" component={ListsPage} exact={true} />
                <Route path="/makepage" component={MakePage} exact={true} />
                <Route path="/" component={MakePage} exact={true} />
              </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
        )
};

export default IsLogged;
