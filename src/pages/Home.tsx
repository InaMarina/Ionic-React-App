import { IonButton,  IonContent, IonLoading, IonPage, IonImg, } from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {getUser} from '../firebaseConfig'
import './Home.css'
import logo from '../assets/logo1.png'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUser().then(user => {
      if (user !== null){
        setIsAuthed(true)
        console.log(user)
      } else {
        setIsAuthed(false)
        console.log(user)
      }
      setLoading(false)
    })
  }, [])

  console.log(isAuthed)
  if(isAuthed === true){
    window.location.href = '/makepage' 
  }

  return (
    <IonPage>
      <IonLoading message={'Just a sec..'} duration={0} isOpen={loading}></IonLoading>
      <IonContent fullscreen >
      <IonImg class="image" src={logo} />
         <IonButton expand="block" routerLink="/login">Login</IonButton>
         <IonButton expand="block" routerLink="/signup">Sign Up</IonButton>
     </IonContent>
    </IonPage>
  );
};

export default Home;
