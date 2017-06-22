/*eslint no-irregular-whitespace:0 */
import React, {Component} from "react";
import "../../css/components/character.css";

export default class Character extends Component {
  render() {
    const width = window.outerWidth;
    const leftPx = (width/2) - 82;

    const style = {
      padding: "0px 0px 16px 0px",
      position: "absolute",
      bottom: 136,
      left: leftPx
    };

    const props = {
      onClick: ()=> alert("クリック禁止です！"),
      className:"animation",
      style
    };

    const empji = `
  ∧　∧
(*‘ω‘ *) 　ちんぽっぽ
 (　　　)
　 v v 　　　
　　　　  　　ぼいんっ
　  川
( (　　) )
        `;
    return (
      <div {...props}>
        <a href="https://tinko.org/whatsthis" style={{textAlign: "center", margin: 4}}>
          これはなにか
        </a>
        <pre>
          {empji}
        </pre>
      </div>
    );
  }
}
