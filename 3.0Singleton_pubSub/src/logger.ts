import {game} from "./store"

export function startLogger(){
    setInterval(()=>{
        console.log(game);
    },5000)
}

// ----------------------Better way -----------------------
import { gameManager } from "./store";

export function startLogger(){
        setInterval(()=>{
            console.log(gameManager.logState());
        },5000)
    }

//-------------------Singleton----------------
import { GameManager } from "./store";

export function startLogger(){
        setInterval(()=>{
            console.log(GameManager.makeInstance().logState());
        },5000)
    }