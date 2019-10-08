import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        redirect: false,
        user: {}
    };


    handleLogout = () => {
        localStorage.removeItem('styls');
        this.props.removeUserLogin();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">Styls</div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {
                            this.props.isLoggedIn ? ( <li className="nav-item" onClick={this.handleLogout}> <Link className="nav-link" to="/" >Logout</Link></li>) : (   <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
    
                            </Link>  </li>)
                        }
    
                        <li className="nav-item">
                            <Link className="nav-link" to="../dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="../pages/Settings">
                      Settings
                    </Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    
};

export default Navbar;