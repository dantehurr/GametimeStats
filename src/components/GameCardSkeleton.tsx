import { IonCard, IonCardContent, IonCardHeader, IonSkeletonText } from '@ionic/react';
import './GameCardSkeleton.css';

<IonCard>
    <IonCardHeader>
        <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
    </IonCardHeader>
    <IonCardContent>
        <div>
            <div>
                <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
                <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
            </div>
            <div>
                <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
                <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
            </div>
            <div>
                <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
                <IonSkeletonText animated={true} style={{width: '80px'}}></IonSkeletonText>
            </div>
        </div>
    </IonCardContent>
</IonCard>