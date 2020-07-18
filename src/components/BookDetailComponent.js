import React from "react";
import {Modal} from "react-bootstrap";
import BookService from "../services/BookService";

const BookDetailComponent = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.book.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="book-cover-lg" src={props.book.coverSrc} alt={props.book.title}/>
                        </div>
                        <div className="col">
                            <div className="row book-dtl">
                                <div className="font-weight-bold mr-1">Author:</div>
                                {props.book.author}
                            </div>
                            <div className="row book-dtl">
                                <div className="font-weight-bold mr-1">Publisher:</div>
                                {props.book.publisher}
                            </div>
                            <div className="row book-dtl">
                                <div className="font-weight-bold mr-1">Year:</div>
                                {props.book.year}
                            </div>
                            <br/>
                            <br/>
                            <div className="row d-block book-dtl">
                                <div className="font-weight-bold mr-1">Availability:</div>
                                {
                                    props.book.available == 1 &&
                                    <div>
                                        <p style={{color: "green"}}>This book is available!</p>
                                        <p>Please request it at the Snell Library Circulation desk.</p>
                                    </div>
                                }
                                {
                                    props.book.available == 0 &&
                                    <div>
                                        <p style={{color: "red"}}>This book is currently on loan.</p>
                                        <p>It will be available again at </p>
                                        {
                                            BookService.convertDate(props.book.lastCheckout)
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default BookDetailComponent