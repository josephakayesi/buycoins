import React, { Component } from 'react'

class NewsFeedItem extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row" style={{ backgroundColor: '#f6f6ef', display:'flex-end' }}>
                    <div className="" >
                        <div>
                            <p style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '10px' }}>{this.props.number}.
                                <span><i className="fa fa-sort-up px-1"></i></span>
                            </p>
                        </div>
                    </div>
                    <div className="" style={{paddingTop: '10px' }}>
                        <p id="activityTitle" style={{ color: '#black', fontWeight: '600', fontSize: '10pt', margin: 0 }}>{this.props.headline} <a href='#' style={{color: '#828282', fontWeight: 'normal'}}>({this.props.link})</a></p>
                        <p style={{ color: '#828282', fontSize: '8pt', textDecoration: 'none', fontWeight: 'normal' }}>{this.props.points}&nbsp;points by <a href='#' style={{color: '#828282'}}>{this.props.author}</a> <a href='#' style={{color: '#828282'}}>{this.props.time}</a> minutes ago | <a href='#' style={{color: '#828282'}}>hide</a> | <a href='#' style={{color: '#828282'}}>{this.props.comments} comments</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsFeedItem