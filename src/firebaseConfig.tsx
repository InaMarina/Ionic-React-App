import firebase from 'firebase/app';
import 'firebase/auth'
import {toast} from './toast';

const firebaseConfig = {
    apiKey: "AIzaSyCqYjMbNM4UnU5mxU-Kol1PoMneYgHcSGQ",
    authDomain: "ionicapp-24631.firebaseapp.com",
    databaseURL: "https://ionicapp-24631.firebaseio.com",
    projectId: "ionicapp-24631",
    storageBucket: "ionicapp-24631.appspot.com",
    messagingSenderId: "418907864496",
    appId: "1:418907864496:web:7d44113186281354332a75"
  };

  firebase.initializeApp(firebaseConfig)

  export async function login(email: string, password: string){
    try{
      const response = await firebase.auth().signInWithEmailAndPassword(email, password)
      return true
    } catch (e){
      toast(e.message)
      return false
    }
  }
  export async function signUpUser(email: string, password: string){
    try{
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      return true
    } catch (e){
      toast(e.message)
      return false

    }
  }
  export function getUser(){
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
        if (user){
          resolve(user)
        } else {
          resolve(null)
        }
        unsubscribe()
      }) 
    })
  }
  export async function logout(){
    try{
      const response = await firebase.auth().signOut()
      return true
    } catch (e){
      toast(e.message)
      return false
    }
  }