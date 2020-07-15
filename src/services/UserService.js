const findAllUsers = () => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/users`)
}

const findUserById = (userId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/users/${userId}`)
        .then(response => response.json())
}

export default {
    findAllUsers,
    findUserById
}