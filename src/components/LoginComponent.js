import React from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/northeastern-logo-black-uls.svg";
import "./styles/LoginStyle.css";

class LoginComponent extends React.Component {
    state = {
        username: '',
        password: '',
        user: {}
    }

    setUser = () => {
        console.log(this.state)
        console.log(this.state.user)
        this.props.history.push(`users/${this.state.user.id}/courses`)
    }

    login = () => {
        fetch("https://is4300-sp20-si-server-java.herokuapp.com/api/login", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        })
            .then(response => response.json())
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(currentUser => {
                if(currentUser) {
                    this.setState({user: currentUser})
                    console.log(this.state.user)
                    this.props.history.push(`users/${this.state.user.id}/courses`)
                }
            })
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="d-flex align-items-center vh-100 body-content">
                    <div className="container">
                        <div className="row d-inline justify-content-center">
                            <img className="neu-logo" src={require('./styles/northeastern-logo-black-uls.svg')}
                                 alt="Northeastern University"/>
                            <form className="login-form">
                                <div className="form-group form-element">
                                    <label className="font-weight-bold">myNortheastern Username</label>
                                    <input className="form-control form-fld"
                                           placeholder="myNortheastern Username"
                                           onChange={(e) => this.setState({username: e.target.value})}/>
                                </div>
                                <div className="form-group form-element">
                                    <label className="font-weight-bold">myNortheastern Password</label>
                                    <input className="form-control form-fld"
                                           type="password"
                                           placeholder="myNortheastern Password"
                                           onChange={(e) => this.setState({password: e.target.value})}/>
                                </div>
                                <button type="button" className="form-control btn form-element form-btn"
                                        onClick={this.login}>
                                    Log In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent