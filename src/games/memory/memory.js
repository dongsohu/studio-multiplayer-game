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

  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{user_id}</li>
    ));
    var creator = this.getSessionCreatorUserId();
    return (
      <div>
        <p>Session ID: {id}</p>
        <p>Session creator: {creator}</p>
        <p>Session users:</p>
        <ul>{users}</ul>
      </div>
    );
  }
  Identity() {
    this.getSessionDatabaseRef().set({ text: "Hello, World!" });
    var host = this.getSessionCreatorUserId();
    var guest = this.getMyUserId();
    if (host === guest) {
      return "I am a host";
    } else {
      return "I am a guest";
    }
  }
}
