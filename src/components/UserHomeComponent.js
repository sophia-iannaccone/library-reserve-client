import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import "./styles/UserHomeStyle.css";
import UserService from "../services/UserService";

class UserHomeComponent extends React.Component {
    state = {
        user: {
            courses: []
        }
    }

    componentDidMount() {
        console.log(this.props)
        UserService.findUserById(this.props.match.params.userId)
            .then(result => this.setState({user: result}))
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="d-flex align items-center vh-100 body-content">
                    <div className="container course-btns">
                        <div className="row justify-content-center">
                            <h2 className="user-msg">Welcome {this.state.user.firstName}!</h2>
                        </div>
                        {
                            (this.state.user.role === "STUDENT" || this.state.user.role === "FACULTY") &&
                            this.state.user.courses.map(course =>
                                <div className="row justify-content-center">
                                    <Link className="btn course-btn m-3"
                                          to={`courses/${course.id}/books`}>
                                        {course.title}
                                    </Link>
                                </div>
                            )
                        }
                        {
                            this.state.user.role === "LIBRARIAN" &&
                            <div className="row justify-content-center">
                                <Link className="btn course-btn m-3"
                                      to={`/requests`}>
                                    Submitted Reserve Requests
                                </Link>
                                <Link className="btn course-btn m-3"
                                      to={`/courses`}>
                                    All Courses
                                </Link>
                                <Link className="btn course-btn m-3"
                                      to={`/search`}>
                                    All Books on Reserve
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserHomeComponent