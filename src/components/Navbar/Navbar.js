import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Y</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">new</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">past</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">comments</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ask</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">show</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">jobs</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">submit</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li className="nav-item">
                            <a className="nav-link" href="#">login</a>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Navbar