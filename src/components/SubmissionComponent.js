import React from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/SubmissionStyle.css";

class SubmissionComponent extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="d-flex align items-center body-content">
                    <div className="container submission-info-card">
                        <div className="row d-flex">
                            <div className="col">
                                <h3>Course Information</h3>
                                <div className="container">
                                    <div className="row d-block pl-3">
                                        <div className="font-weight-bold">Instructor Name</div>
                                        <p>Gary Oak</p>

                                        <div className="font-weight-bold">Instructor Email</div>
                                        <p>oak.g@northeastern.edu</p>

                                        <div className="font-weight-bold">Assistants/TAs</div>
                                        <p>N/A</p>

                                        <div className="font-weight-bold">Office Phone</div>
                                        <p>(781)-555-2956</p>

                                        <div className="font-weight-bold">Department</div>
                                        <p>Philosophy</p>

                                        <div className="font-weight-bold">Campus Address</div>
                                        <p>360 Huntington Ave., Boston, MA 02115</p>

                                        <div className="font-weight-bold">Course Code</div>
                                        <p>PHIL 2325</p>

                                        <div className="font-weight-bold">Semester</div>
                                        <p>Spring 2021</p>

                                        <div className="font-weight-bold">Number of students in course</div>
                                        <p>35</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h3>Book Information</h3>
                                <div className="container">
                                    <div className="row d-block pl-3">
                                        <div className="font-weight-bold">Availability</div>
                                        <p>I will provide a personal copy to the library</p>

                                        <p className="font-weight-bold">Material Type</p>
                                        <p>Print Book</p>

                                        <div className="font-weight-bold">Title</div>
                                        <p>Five Dialogues: Euthyphro, Apology, Crito, Meno, Phaedo</p>

                                        <div className="font-weight-bold">Author/Director/Artist</div>
                                        <p>Plato</p>

                                        <div className="font-weight-bold">Year of Publication/Release</div>
                                        <p>2002</p>

                                        <div className="font-weight-bold">Edition</div>
                                        <p>2nd Edition</p>

                                        <div className="font-weight-bold">Publisher/Producer</div>
                                        <p>Hackett Publishing Company, Inc.</p>

                                        <div className="font-weight-bold">Call Number</div>
                                        <p>N/A</p>

                                        <div className="font-weight-bold">ISBN</div>
                                        <p>0872206335</p>

                                        <div className="font-weight-bold">URL</div>
                                        <p>N/A</p>

                                        <div className="font-weight-bold">Loan Period</div>
                                        <p>24 Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pr-3 justify-content-end">
                            <button className="btn btn-success">Approve Request</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubmissionComponent