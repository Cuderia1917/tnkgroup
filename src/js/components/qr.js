import React, {Component} from "react";
import QRCode from "qrcode.react";

export default class QR extends Component {
  render() {
    const width = window.outerWidth;
    const leftPx = (width/2) - 64;
    
    return (
      <div style={{position: "absolute",left: leftPx, top: 10}}>
        <QRCode value="ちんぽっぽ(´・ω・｀)ぼいん" />
      </div>
    );
  }
}
