import React from "react";
import ReactDOM from "react-dom";
// import './main.css';
require('./styles.scss');



//   const url = 'https://jsonplaceholder.typicode.com/users'
//   function getUsers(url) {
//     return fetch(url).then(user => {
//       console.log(user);
//      return user
//     })
//     render() {
//       getUsers()
//     }
//   }
// }



const Index = () => {
  
  let strings = ["one", "two"]
  strings.map((str, i) => {
    let newnum = parseInt(str[i].length)
    console.log(newnum);
    

  })
  return <div>num is: </div>
}

ReactDOM.render(<Index/>, document.getElementById('app-container'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}