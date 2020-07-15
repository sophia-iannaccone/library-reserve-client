const findAllBooks = () => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/books`)
        .then(response => response.json())
}

const findBooksForCourse = (courseId) => {
    return fetch(`https://is4300-sp20-si-server-java.herokuapp.com/api/courses/${courseId}/books`)
        .then(response => response.json())
}

const convertDate = (lastCheckout) => {
    let d = new Date(lastCheckout)
    let h = d.getHours() + 3
    return d.toDateString() + " at " + h + ":" + d.getMinutes()
}

export default {
    findAllBooks,
    findBooksForCourse,
    convertDate
}