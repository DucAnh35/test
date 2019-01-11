import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
        <section id="item" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
                        <div className="card">
                            <img src="image/customer-1.jpeg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h1 className="text-capitalize">team member</h1>
                                </div>
                                    <h4 className="primary-color text-capitalize">chef</h4>
                            </div>
                              
                            <div className="card-footer team-icons d-flex justify-content-between">
                                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fab fa-yelp fa-2x"></i></a>
                            </div>
                        </div>
                      
                    </div>

                    <div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
                        <div className="card">
                            <img src="image/customer-3.jpeg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h1 className="text-capitalize">team member</h1>
                                </div>
                                    <h4 className="primary-color text-capitalize">chef</h4>
                            </div>
                            <div className="card-footer team-icons d-flex justify-content-between">
                                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fab fa-yelp fa-2x"></i></a>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
                        <div claclassNamess="card">
                            <img src="image/customer-5.jpeg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h1 className="text-capitalize">team member</h1>
                                </div>
                                <h4 className="primary-color text-capitalize">chef</h4>
                            </div>
                            <div className="card-footer team-icons d-flex justify-content-between">
                                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fab fa-yelp fa-2x"></i></a>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </section>
    );
  }
}
