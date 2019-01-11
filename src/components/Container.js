import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
        <div className="container-fuild info p-3" id="top-icons">
            <div className="row">
                <div className="col d-flex justify-content-between align-items-baseline flex-wrap">
                    <div className="info-icons p-2">
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-yelp fa-2x"></i></a>
                    </div>
                    <h2 className="primary-color p-2 text-capitalize">8325 lincoln blvd, los angeles, ca 90025</h2> 
                </div>
            </div>
        </div>
    )
  }
}
