const findCourseById = (courseId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/courses/${courseId}`)
        .then(response => response.json())
}

const findAllCourses = () => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/courses`)
        .then(response => response.json())
}

const findCoursesForUser = (userId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/users/${userId}/courses`)
        .then(response => response.json())
}

export default {
    findAllCourses,
    findCourseById,
    findCoursesForUser
}