const Api = {
  fetchUser(userId) {
    return fetch(`https://api.github.com/users/${userId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        return myJson
      });
  }
}

export default Api
