import React, { useEffect, useState } from 'react';
import { getStatusDisplay } from './GameStatusDisplay';
import { dateConfiguration } from './DateConfiguration';
import { gameDateConfig } from './GameDateConfig';
import { saveToken, getToken } from '../utils/indexedDB';

/* IONIC IMPORTS */
import './GameCard.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonRow, IonToast } from '@ionic/react';

/* SWIPER IMPORTS */
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* AXIOS IMPORT */
import axios from 'axios';

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);
const dataDate = dateConfiguration(tomorrow);

console.log('Date:', dataDate);

var config = {
    method: 'get',
    url: 'https://api-nba-v1.p.rapidapi.com/games',
    params: {date: dataDate},
    //params: {date: '2023-12-07'},
    headers: {
        'x-rapidapi-key': 'a5bd252617mshcc1a82ac5cc5b16p1273b2jsne720a4d0ab23',
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    }
};

const GameCard: React.FC = () => {

    const displayContent = getStatusDisplay;
    // console.log(displayContent);

    const [ games, setGames ] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            axios(config).then(
                (theResponse) => {
                    const resp = theResponse.data.response;
                    // const dataArray = Array.from(resp);
                    console.log("Games: ")
                    console.log("Data: ", JSON.stringify(resp));
                    setGames(resp);
                }
            ).catch(error => console.error("Error getting games at getGames: ", error));
        };
        getGames();

        const intervalRate = setInterval(getGames, 60000);

        return () => clearInterval(intervalRate);
    }, []);

    const whenIs = gameDateConfig;
    const gamer = getStatusDisplay;

    return (
        <>
        <IonContent>
            {games.length === 0 ? (<p className='no-games'>no games today</p>) : games.map((game) => (
                <IonCard>
                    <IonCardHeader className='game-time'>
                        <IonCardSubtitle>{whenIs(game.date.start)}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                            <div>
                                <div className='scoreboard'>
                                    <h1>{game.teams.visitors.code}</h1>
                                    <h1>{game.scores.visitors.points}</h1>
                                </div>
                                <div className='game-status'>
                                    {/* <h4>Q{game.periods.current}</h4> */}
                                    <h4>{getStatusDisplay(game)}</h4>
                                    <h2>{game.status.clock}</h2>
                                </div>
                                <div className='scoreboard'>
                                    <h1>{game.teams.home.code}</h1>
                                    <h1>{game.scores.home.points}</h1>
                                </div>
                                <div className='location'>
                                    <h4>{game.arena.name}, {game.arena.city}, {game.arena.state}</h4>
                                </div>
                            </div>
                    </IonCardContent>
                </IonCard>
            ))}
        </IonContent>
        </>
    );
}

export default GameCard;