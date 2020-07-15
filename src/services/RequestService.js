const findAllRequests = () => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/requests`)
        .then(response => response.json())
}

const findRequestById = (requestId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/requests/${requestId}`)
        .then(response => response.json())
}

const findRequestByCourse = (courseId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/courses/${courseId}/requests`)
        .then(response => response.json())
}

const findRequestByUser = (userId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/users/${userId}/requests`)
        .then(response => response.json())
}

const convertDate = (subSent) => {
    let d = new Date(subSent)
    return d.toDateString()
}

export default {
    findAllRequests,
    findRequestById,
    findRequestByCourse,
    findRequestByUser,
    convertDate
}