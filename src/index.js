import React from "react";
import ReactDOM from "react-dom";
// import './main.css';
require('./styles.scss')

export default class Index extends React.Component {
  render() {
    return (
      <div>SUck on it bitches</div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('app-container'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}