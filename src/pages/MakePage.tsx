import React, { useState, useEffect} from 'react';
import { IonFab, IonCardHeader, IonCardContent, IonCardTitle, IonFabButton, IonInput, IonLabel, IonItem, IonModal, IonList, IonContent, IonButtons, IonIcon, IonImg, IonLoading, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonCard} from '@ionic/react';
import { exitOutline, trash, add, } from 'ionicons/icons';
import {logout, getUser} from '../firebaseConfig'
import {toast} from '../toast'
import './MakePage.css'
import logo from '../assets/logo1.png'


export interface User {
  displayName: string | null
}

export interface Item {
  id: number;
  text: string;
}

const MakePage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [isAuthed, setIsAuthed] = useState(false)
  const [items, setItems] = useState<Item[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const addItem = () => {
    const nextId = Math.random()
    const item: Item = {
      id: nextId,
      text
    };
    setItems([...items, item]);
    setShowModal(false);
    setText('');
  };

  const deleteItem = (item: Item) => {
    const newItems = items.filter(t => t.id !== item.id);
    setItems(newItems);
  }

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

  const logOutUser = async() => {
    const response = await logout()
    if(response){
      toast('Logout successfull')
      window.location.href = '/' // send the user to login page
    } else {
      toast('Something went wrong')
    }
  }

  return (
    <IonPage>
      <IonLoading message={'Just a sec..'} duration={0} isOpen={loading}></IonLoading>

      <IonHeader >
       <IonToolbar color="secondary">
         <IonButtons slot="end">
           <IonButton onClick={logOutUser}>      
             <IonIcon slot="icon-only" icon={exitOutline} />
           </IonButton>
         </IonButtons>
         <IonTitle>Items</IonTitle>
       </IonToolbar>
      </IonHeader>

      <IonContent>

        {items.length === 0 ? (
          <div className="container">
            <IonImg src={logo} />
            You don't have any items in your list at the moment!
          </div>
        ) : (
            <IonList>
              {items.map((todo, i) => (
                <IonItem key={i}>
                  <IonLabel>
                    <h2>{todo.text}</h2>
                  </IonLabel>
                  <IonIcon data-testid="trash" icon={trash} color="secondary" slot="end" onClick={() => deleteItem(todo)} />
                </IonItem>
              ))}
            </IonList>
          )}
        <IonFab vertical="bottom" horizontal="center">
          <IonFabButton title="Add Item" onClick={() => setShowModal(true)}>
            <IonIcon data-icon="add" icon={add} />
          </IonFabButton>
        </IonFab>
    
        <IonModal
          onDidDismiss={() => setShowModal(false)}
          isOpen={showModal}
        >
          <IonCard class="container" color="tertiary">
            <IonCardHeader>
              <IonCardTitle>Add Item</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <IonImg src={logo} />
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">Item:</IonLabel>
                  <IonInput id="item" title="Item" value={text} onIonChange={e => setText(e.detail.value!)} />
                </IonItem>
              </IonList>
              <IonButton expand="block" onClick={addItem}>
                Save
              </IonButton>
              <IonButton expand="block" color="secondary" onClick={() => setShowModal(false)}>Cancel</IonButton>

            </IonCardContent>
          </IonCard>

        </IonModal>
      </IonContent>

    </IonPage>
  );
};
export default MakePage;
