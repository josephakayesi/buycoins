import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>

                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff6600', }}>
                <a className="navbar-brand" href="#" style={{ color: 'white' }}>Y</a>
                    <div className="collapse navbar-collapse flex-row" id="navbarColor02">
                        
                        <div className='col-sm-8'>
                   

                            <ul className="navbar-nav mr-auto flex-row" style={{flexWrap: 'wrap'}}>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">new</a>
                                </li>
                                <a className="nav-link" href="#">|</a>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">past</a>
                                </li>
                                <a className="nav-link" href="#">|</a>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">comments</a>
                                </li>
                                <a className="nav-link" href="#">|</a>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">ask</a>
                                </li>
                                <a className="nav-link" href="#">|</a>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">show</a>
                                </li>
                                <a className="nav-link" href="#">|</a>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">jobs</a>
                                </li>
                                <a className="nav-link" href="#">|</a>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: '700' }} href="#">submit</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <ul class="nav navbar-nav navbar-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ fontWeight: '700' }} >login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Navbar