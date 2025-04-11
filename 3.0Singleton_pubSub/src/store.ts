interface Game{
    id:String,
    whitePlayerName:String,
    blackPlayerName:String, 
    moves:String[]
}
// export const game:Game[]=[];  we will obviously use class for better access

export class GameManager {
    private games: Game[] = [];
    constructor(){ 
       this.games=[];
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}
export const gameManager = new GameManager();

//---------------------Singleton pattern-----------------
export class GameManager {
    private games: Game[] = [];
    private static instance :GameManager;
    private constructor(){  // cant call new from outside
       this.games=[];
    }
    static makeInstance(){
        if(GameManager.instance){
           return GameManager.instance;
        }

        GameManager.instance=new GameManager();
        return GameManager.instance;
    }
    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}
