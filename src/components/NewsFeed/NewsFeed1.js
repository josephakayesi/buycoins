import React, { Component } from 'react'

class NewsFeed1 extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-1 col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 px-0" >
                    <div>
                        <p style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '10px' }}>{this.props.time}
                            <br />
                            <span>{this.props.period}</span>
                        </p>
                    </div>
                </div>
                <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <h4 id="activityTitle">{this.props.activityTitle}</h4>
                    <p>{this.props.activityDescription}</p>
                </div>
                <div className="col-1 col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 px-0" >
                    <div className="row" style={{ paddingTop: '10px' }}>
                        <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <a href="#check"><i className="fa fa-check"></i></a>
                        </div>
                        <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <a href="#times"><i className="fa fa-times"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsFeed1