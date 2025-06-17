import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border header">
          <IonTitle>GAMETIME</IonTitle>
          <IonText className='subtitle'>Today's NBA Schedule + Live Scores</IonText>
      </IonHeader>
      <IonContent fullscreen>

        <GameCard />

      </IonContent>
    </IonPage>
  );
};

export default Home;
