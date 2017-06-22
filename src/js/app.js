import React, {Component} from "react";
import "../css/app.css";
import MemberList from "./components/member_list";
import QR from "./components/qr";
import Character from "./components/character";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemberList/>
        <QR/>        
        <Character/>
      </div>
    );
  }
}

export default App;
