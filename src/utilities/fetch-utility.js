
//facade pattern example using fetcch()
function getUsers() {
    return getFetchDetails('https://jsonplaceholder.typicode.com/users')
  }
  
  function getUserPosts(userId) {
    return getFetchDetails('https://jsonplaceholder.typicode.com/posts', {
      userId: userId
    })
  }
  
  
function getFetchDetails(url, params = {}) {
const queryStr = Object.entries(params).map(param => {
  return `${param[0]}=${param[1]}`
}).join('&')
return fetch(`${url}?${queryStr}`, {
  method: "Get",
  headers: { "Content-Type": "application/json" }
}).then(res => res.json())
}
 
getUsers()
.then(users => {
  users.forEach(user => {
    getUserPosts(user.id)
    .then(posts => {
      // console.log(user.name);
      posts.map(post => {
        return  (
    <div>
        hi
    </div>
        )
      })
    })
  })
})