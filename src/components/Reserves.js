import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import UserHomeComponent from "./UserHomeComponent";
import BookListComponent from "./BookListComponent";
import BookDetailComponent from "./BookDetailComponent";
import SearchListComponent from "./SearchListComponent";
import CoursesComponent from "./CoursesComponent";
import SubmissionListComponent from "./SubmissionListComponent";
import SubmissionComponent from "./SubmissionComponent";


class Reserves extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path='/'
                        exact={true}
                        component={LoginComponent}/>

                    <Route
                        path='/login'
                        exact={true}
                        component={LoginComponent}/>

                    <Route
                        path='/user'
                        exact={true}
                        component={UserHomeComponent}/>

                    <Route
                        path='/user/:userId'
                        exact={true}
                        component={UserHomeComponent}/>

                    <Route
                        path='/users/:userId/courses'
                        exact={true}
                        component={UserHomeComponent}/>

                    <Route
                        path='/users/:userId/courses/:courseId/books'
                        exact={true}
                        component={BookListComponent}/>

                    <Route
                        path='/modal'
                        exact={true}
                        component={BookDetailComponent}/>

                    <Route
                        path='/search'
                        exact={true}
                        component={SearchListComponent}/>

                    <Route
                        path='/courses'
                        exact={true}
                        component={CoursesComponent}/>

                    <Route
                        path='/requests'
                        exact={true}
                        component={SubmissionListComponent}/>

                    <Route
                        path='/requests/1'
                        exact={true}
                        component={SubmissionComponent}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default Reserves