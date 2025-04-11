// import {game} from "./store"
import { startLogger } from "./logger"
import { GameManager, gameManager } from "./store"

startLogger();
setInterval(()=>{ // can be replae with websocket in real projects
    game.push({
        id:Math.random().toString(),
        whitePlayerName:"A",
        blackPlayerName:"B",
        moves:[]
    })
    //now for move add in this way 
    game[0].moves.push("e4")//which is complicated
},5000)

// ------------------------------------------------------------
//updatedcode

const gameManager = new GameManager(); we should not intialize here
startLogger();

setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        whitePlayerName: "A",
        blackPlayerName: "B",
        moves: []
    });
}, 5000)


//--------------------Singleton----------------
startLogger();

setInterval(() => {
    GameManager.makeInstance().addGame({
        id: Math.random().toString(),
        whitePlayerName: "A",
        blackPlayerName: "B",
        moves: []
    });
}, 5000)