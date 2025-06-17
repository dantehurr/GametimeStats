import { dateConfiguration } from "./DateConfiguration";

export async function fetchNewScores() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const dataDate = dateConfiguration(tomorrow);

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

    const response = await fetch(config);
    const scores = await.response.json();
    console.log(scores);
}