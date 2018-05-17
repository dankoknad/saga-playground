const Api = {
    fetchUser(userId) {
        fetch(`https://api.github.com/users/${userId}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }
}

export default Api
