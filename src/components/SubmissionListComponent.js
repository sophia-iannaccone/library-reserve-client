import React from "react";
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import HeaderComponent from "./HeaderComponent";
import RequestService from "../services/RequestService";
import "./styles/RequestStyle.css";

class SubmissionListComponent extends React.Component {
    state = {
        requests: []
    }

    componentDidMount() {
        RequestService.findAllRequests()
            .then(results => this.setState({
                requests: results
            }))
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="d-flex align items-center vh-100 body-content">
                    <div className="container course-btns">
                        <div className="row justify-content-center m-1">
                            <h2>Reserve Requests</h2>
                        </div>
                        <ListGroup className="list-group req-list">
                            {
                                this.state.requests.map(request =>
                                    <ListGroup.Item className="module-list-item req-item" eventKey={request.id}>
                                        <Link className="row sub-info"
                                              to={`/requests/1`}>
                                            {request.user.firstName} {request.user.lastName} for "{request.course.title}"
                                        </Link>
                                        <div className="row sub-dt">
                                            {RequestService.convertDate(request.subSent)}
                                        </div>
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubmissionListComponent