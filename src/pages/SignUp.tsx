import { IonContent, IonImg, IonItem, IonInput, IonButton, IonPage, IonLoading, IonText, IonCard } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import {getUser} from '../firebaseConfig'
import {toast} from '../toast'
import {signUpUser} from '../firebaseConfig'

import './SignUp.css'
import logo from '../assets/logo2.png'


const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const signup = async() => {
    
    setLoading(true)

    if(email.trim() === '' || password.trim() === '') {
      return toast('Email and password are required')
    }

    const response = await signUpUser(email, password)

    if(response) {
      toast('Sign up successful')
      window.location.href = '/login' 
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
            <IonInput placeholder="Email" onIonChange={(e: any) => setEmail(e.detail.value)} ></IonInput>
        </IonItem>
        <IonItem>
            <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.detail.value)} ></IonInput>
        </IonItem>
        <IonButton color="tertiary" onClick={signup}>Sign Up</IonButton>
        </IonCard>
        <IonText class="centerSignup">Already Signed Up?</IonText>
        <IonButton expand="block" routerLink="/login">Back to Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
