export function getStatusDisplay(game){

    const gameStatus = (game) => {
        const gameStatus = game.status.short;
        const halftimeStatus = game.status.halftime;
        const currentQuarter = game.periods.current;
    
        console.log('Game Status:', gameStatus);
    
            if(gameStatus === 1) {
                return "Game Not Started"; // Game Not Started
            } else if (gameStatus === 2) {
                return `Q${currentQuarter}`;
            } else if (gameStatus === 2 && halftimeStatus === true) {
                return "HALFTIME"
            } else {
                return "FINAL";
            }
    }
    return gameStatus(game);
}
/* const StatusDisplay = games.map((game) => {

        const gameStatus = game.status.short;
        const currentQuarter = game.periods.current;
        const currentPeriodTime = game.status.clock;
    
        const displayStatus =
            gameStatus === 1
            ? null // Game Not Started
            : gameStatus === 2
            ? `Q${currentQuarter}` // Game Is Live
            : "FINAL"; // Game Is Finished
            
        console.log(displayStatus);
        return displayStatus;
        }
    ) */