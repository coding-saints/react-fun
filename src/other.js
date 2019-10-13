import React from "react";
import ReactDOM from "react-dom";
// import Main from "@/components/Main";
import  "./style.scss";

export default class Index extends React.Component {
  render() {
    return (
      <div>WOrks</div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}