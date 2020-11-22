import React, { useEffect, useState} from 'react';
import { IonContent, IonImg, IonItem, IonButton, IonInput, IonPage,  IonText, IonCard, IonLoading } from '@ionic/react';

import {login, getUser} from '../firebaseConfig'
import {toast} from '../toast'

import './Login.css'
import logo from '../assets/logo2.png'

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const loginUser = async() => {
    setLoading(true)
    const response = await login(email, password)

    if(response){
      toast('Login successfull')
      window.location.href = '/makepage' 
    }
    setLoading(false)
  }

  return (
    <IonPage>
      <IonLoading message={'Just a sec..'} duration={0} isOpen={loading}></IonLoading>
      <IonContent fullscreen>
        <IonImg class="imageLogin" src={logo} />
          <IonCard>
            <IonItem>
              <IonInput placeholder="email" onIonChange={(e: any) => setEmail(e.detail.value)} ></IonInput>
           </IonItem>
           <IonItem>
              <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.detail.value)} ></IonInput>
           </IonItem>
           <IonButton onClick={loginUser} >Login</IonButton>
          </IonCard>
        <IonText class="centerLogin">Not yet Signed Up?</IonText>
        <IonButton expand="block" routerLink="/signup">Sign Up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
