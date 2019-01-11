import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fuild info p-3" id="top-icons">
            <div className="row">
                <div className="col d-flex justify-content-between align-items-baseline flex-wrap">
                    <div className="info-icons p-2">
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="#" className="mr-2 primary-color"><i className="fab fa-yelp fa-2x"></i></a>
                    </div>
                    <h2 className="primary-color p-2 text-uppercase">&copy;copright 2018</h2> 
                </div>
            </div>
        </div>
        <a href="#top-icons" id="back-to-top" className="p-1"><i className="fas fa-arrow-up primary-color fa-3x"></i></a>
      </div>
    );
  }
}
export default Footer;