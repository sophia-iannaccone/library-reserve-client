import React from "react";
import {Modal} from "react-bootstrap";

const ReserveRequestComponent = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Request A Book For Snell Course Reserves
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row d-flex">
                        <div className="col">
                            <h3>Course Information</h3>
                            <form className="flex-fill">
                                <div class="form-group">
                                    <label>Instructor Name</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Instructor Email</label>
                                    <input type="email" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Assistants/TAs</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Office Phone</label>
                                    <input type="tel" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Department</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Campus Address</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Course Code (format: ANTH 1101)</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Semester (select all that apply)</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">Fall</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">Spring</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">Summer I</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">Summer II</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">Full Summer</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <label className="form-check-label">Other (CPS, etc.)</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Number of students in course</label>
                                    <input type="number" className="form-control  flex-fill"/>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <h3>Book Information</h3>
                            <form className="flex-fill">
                                <div className="form-group">
                                    <label>Availability</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">A copy is available at Snell Library; please
                                            place it on reserve</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">Please purchase a copy for reserve</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">I will provide a personal copy to the
                                            library</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Material Type</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">Print Book</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">E-Book</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">Physical Media (DVD, CD, VHS)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">Streaming Media (video and audio)</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Author/Director/Artist</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Year of Publication/Release</label>
                                    <input type="number" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Edition</label>
                                    <input type="number" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Publisher/Producer</label>
                                    <input type="text" className="form-control flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Call Number (if available at Northeastern Libraries)</label>
                                    <input type="number" className="form-control  flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>ISBN</label>
                                    <input type="text" className="form-control  flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>URL (if applicable)</label>
                                    <input type="text" className="form-control  flex-fill"/>
                                </div>
                                <div className="form-group">
                                    <label>Loan period for students</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">3 hours (in-library use only)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">24 Hours</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value=""/>
                                        <label className="form-check-label">N/A (not a physical item)</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={props.onHide}>Submit</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReserveRequestComponent