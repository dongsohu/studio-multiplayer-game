import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";

export default class DemoButton extends GameComponent {

  handleButtonClick() {
// this is our click handler 
    let id = this.getMyUserId;
//write userId to firebase
this.getSessionDatabaseRef().set({
  
  user_id: UserApi.getName(this.getMyUserId())
  
});
   onSessionDataChanged(data){
    console.log('I clicked the button!');
   }
  
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick()}>
          Click me!
        </button>
      </div>
    );
  }
}
