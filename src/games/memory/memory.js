import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";

export default class Memory extends GameComponent {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      input: ""
    };

    var allIds = this.getSessionUserIds();
    

    // Store the username of the host (aka player 1)
var host = this.getSessionCreatorUserId();


    // Store the username of the guest (aka player 2)
    var guest;

   for(var i = 0; i++; i< allIds.length){
     if(allIds[i] !== host){
      console.log("found the guest");
     }
      // console.log(allIds[i =! creator]);
   }
  }

  gameState = {
    playerOneScore: 0,
    playerTwoScore: 0,
    amountOfImages: 10,
    amountOfPairs: 5,
    imgs: [],
    matchedPairs: [],
    //assign a number to an image so that once it is displayed and then clicked on it will show that it is matched.
    turn: this.getSessionCreatorUserId(),
    players: 2
    // players: 2,
  };
  //if gameState.turn == this.getCurrentUserId()
  //This is used aater when i have determin whose turn it is.

  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{user_id}</li>
    ));
    var host = this.getSessionCreatorUserId();
    // var funVar = "the other variable";
    var message;
    if (id === host) {
      message = "I am a host";
    } else {
      message = "I am a guest";
    }

    const container = {

      display: "flex",
      flexGrow: "1",
      backgroundColor: "blue",
      flexFlow: "column",
      /* flex-basis: 100%; */
      height: "-webkit-fill-available"
    };
    const gameInfo = {
      border: "solid",
      display: "flex",
      // flex: "1",
      backgroundColor: "green",
      flex: "wrap", 
      flexFlow: "column",
      width: 600,
      margin: 15,
    };
    const scoreboard = {
      display: "flex",
      backgroundColor: "red",
      justifyContent: "center",
      flexFlow: "column",
      alignContent: "center",
      flex: "wrap", 
      width: 100,
      margin: 15,
    };
    return (
      <div style={container} id="container">
        <div style={gameInfo} id="gameInfo">
          <div>
          <p>Session ID: {id}</p>
          </div>
          <div>
          <p>Session creator: {host}</p>
          </div>
          <div>
          <p>Session users:</p>
          <ul>{users}</ul>
          </div>
        </div>
        <div>
          <div>{message}</div>
          {/* <span>The value of funVar is {funVar}</span> */}
        </div>
        <div style={scoreboard} id="scoreboard">
          <div>
            <span>Player One: {this.gameState.playerOneScore}</span>
          </div>
          <div>
            <span>Player Two: {this.gameState.playerTwoScore}</span>
          </div>
        </div>
      </div>
      // <div>
      //   <div>
      //     some stuff
      //   </div>
      //   <div>
      //     some other stuff
      //   </div>
      // </div>
    );

    //  this.getSessionDatabaseRef().set({
    //  user_id: UserApi.getName(this.getMyUserId())
    //  });
    //  });
  }
}
