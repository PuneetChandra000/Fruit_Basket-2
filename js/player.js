// Player class
class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        
        this.rank = null ;
    }

    // getCount
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    // updateCount
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    // update
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    // getPlayerInfo
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    // getPlayerAtEnd
    getPlayerAtEnd(){
        database.ref('playerAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    // updating player at end
    static updatePlayerAtEnd(rank){
        database.ref("/").update({
            playerAtEnd : rank
        })
    }

    
}
