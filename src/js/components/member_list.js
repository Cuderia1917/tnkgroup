import React, {Component} from "react";

export default class MemberList extends Component {
  render() {
    const props = {
      name:"tinkogroups",
      title:"tinkogroups",
      src: "https://cuderia1917.github.io/tnkgroup/",
      style: {
        border: 0,
        borderWidth: 0
      }
    };
    return (
      <div style={{position: "absolute",bottom: 0}}>
        <iframe title="tinkogroups" {...props}/>
        <div>
          <br/>&copy;ちんこ系ドメイン勉強会
          <br/>last-update: 2016/12/12
        </div>
      </div>
    );
  }
}
