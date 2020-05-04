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
    var creator = this.getSessionCreatorUserId();
    // var funVar = "the other variable";
    var message;
    if (id === creator) {
      message = "I am a host";
    } else {
      message = "I am a guest";
    }
    return (
      <div>
        <div>
          <p>Session ID: {id}</p>
          <p>Session creator: {creator}</p>
          <p>Session users:</p>
          <ul>{users}</ul>
        </div>
        <div>
          <div>{message}</div>
          {/* <span>The value of funVar is {funVar}</span> */}
        </div>
        <div>
          <span>Player One: {this.gameState.playerOneScore}</span>
        </div>
        <div>
          <span>Player Two: {this.gameState.playerTwoScore}</span>
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
