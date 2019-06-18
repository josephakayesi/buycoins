import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='bottom align-center' style={{ position: 'fixed', bottom: 0, left: 0, textAlign: 'center' }}>
                    <center>
                    <div className='text-center' style={{ bottom: 0, color: 'black', width: '100%', position: 'fixed', display: 'block', zIndex: 100 }}>
                        <hr className='container' style={{ borderWidth: 3, borderColor: '#ff6600' }} />
                        <ul className="navbar-nav mr-auto" style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Guidelines</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">API</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Security</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Lists</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Bookmarklet</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Legal</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Apply to YC</a>
                            </li>
                            &nbsp;
                        <a className="nav-link" href="#">|</a>
                            &nbsp;
                        <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className='pb-4 pt-3'><text style={{ color: '#828282', fontSize: 18 }}>Search:</text>&nbsp;&nbsp;
                            <input type="text" value="" size="17" />
                        </form>
                    </div>
                    </center>
                </footer>
            </div>

        )
    }
}

export default Footer
