import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Your lists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>

      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Here are your lists" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
