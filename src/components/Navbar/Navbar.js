import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#ff6600', height: 30}}>
                <a className="navbar-brand" href="#"style={{color: 'white'}}>Y</a>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">new</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">past</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">comments</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">ask</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">show</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">jobs</a>
                        </li>
                        <a className="nav-link" href="#">|</a>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontWeight: '700'}} href="#">submit</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontWeight: '700'}} >login</a>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Navbar