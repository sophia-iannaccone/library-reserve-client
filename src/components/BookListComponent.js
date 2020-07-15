import React from "react";
import HeaderComponent from "./HeaderComponent";
import BookService from "../services/BookService";
import UserService from "../services/UserService";
import CourseService from "../services/CourseService";
import BookDetailComponent from "./BookDetailComponent";
import ReserveRequestComponent from "./ReserveRequestComponent";
import "./styles/BookListStyle.css";

class BookListComponent extends React.Component {
    state = {
        bookList: [],
        showModal: false,
        showRequestForm: false,
        currBook: {},
        currUser: {},
        currCourse: {}
    }

    componentDidMount() {
        UserService.findUserById(this.props.match.params.userId)
            .then(result => this.setState({
                currUser: result
            }))
        BookService.findBooksForCourse(this.props.match.params.courseId)
            .then(results => this.setState({
                bookList: results
            }))
        CourseService.findCourseById(this.props.match.params.courseId)
            .then(result => this.setState(({
                currCourse: result
            })))
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <BookDetailComponent
                    book={this.state.currBook}
                    show={this.state.showModal}
                    onHide={() => this.setState({showModal: false})}/>
                <ReserveRequestComponent
                    book={this.state.currBook}
                    show={this.state.showRequestForm}
                    onHide={() => this.setState({showRequestForm: false})}/>
                <div className="d-flex align items-center vh-100 body-content">
                    <div className="container course-btns">
                        <div className="row justify-content-center">
                            <h2>Books on reserve for {this.state.currCourse.title}</h2>
                        </div>
                        {
                            this.state.bookList.map(book =>
                                <div className="row book-result">
                                    <div className="col-2">
                                        <img className="book-cover" src={book.coverSrc} alt={book.title}/>
                                    </div>
                                    <div className="col-10">
                                        <div className="container">
                                            <button className="row btn p-0 book-title"
                                                    onClick={() => this.setState({showModal: true, currBook: book})}>
                                                {book.title}
                                            </button>
                                            <div className="row book-info">{book.author}</div>
                                            <div className="row book-info">{book.publisher}</div>
                                            <div className="row book-info">{book.year}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <br/>
                        <div className="row justify-content-center">
                            {
                                this.state.currUser.role === "STUDENT" &&
                                <p className="sub-text">If you can't find what you're looking for, try searching the complete Snell catalogue using the search bar at the top of the page</p>
                            }
                            {
                                this.state.currUser.role === "FACULTY" &&
                                <button className="btn btn-success"
                                        onClick={() => this.setState({showRequestForm: true})}>
                                    Want to add a book to your course's reserve? Click here!
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookListComponent