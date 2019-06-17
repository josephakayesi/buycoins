import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className='bottom' style={{ position: 'fixed', bottom: 0, left: 0, textAlign: 'center' }}>
                <p className='text-center'>I am a footer</p>
            </footer>
        )
    }
}

export default Footer
