import React, {useState, useEffect} from 'react';

import {getUser} from './firebaseConfig'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import IsLogged from './navigation/IsLogged';
import NotLogged from './navigation/NotLogged';

const App: React.FC = () => {

  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    getUser().then(user => {
      if (user !== null){
        setIsAuthed(true)
        console.log(user)
      } else {
        setIsAuthed(false)
        console.log(user)
      }
    })
  }, [])
  console.log(isAuthed)

  if(isAuthed === true){
    return(
        <IsLogged/>
      )
  } else {
    return(
        <NotLogged/>
      )
  }
}

export default App;
