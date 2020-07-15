import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import CourseService from "../services/CourseService";
import "./styles/UserHomeStyle.css";

class CoursesComponent extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(results => this.setState({
                courses: results
            }))
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="d-flex align items-center vh-100 body-content">
                    <div className="container course-btns">
                        <div className="row justify-content-center">
                            <h3>Courses Available</h3>
                        </div>
                        {
                            this.state.courses.map(course =>
                                <div className="row justify-content-center">
                                    <Link className="btn course-btn m-3"
                                          to={`/courses/${course.id}/books`}>
                                        {course.title}
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CoursesComponent