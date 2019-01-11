import React, { Component } from 'react'

export default class Reviews extends Component {
  render() {
    return (
        //review
        <section id="reviews" className="py-5">
            <div id="slider" className="carousel slide" data-ride="carousel ">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                    <div className="align-sefl-center ml-3">
                                        <img src="image/customer-1.jpeg" alt="" className="rounded-circle review-img" />
                                    </div>
                                    <div className="review-text px-5">
                                        <h2 className="text-capitalize mb-3 primary-color">
                                            customer name
                                        </h2>
                                        <p className="lead text-muted">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever to make a type specimen book.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                    <div className="align-sefl-center ml-3">
                                        <img src="image/customer-3.jpeg" alt="" className="rounded-circle review-img" />
                                    </div>
                                    <div className="review-text px-5">
                                        <h2 className="text-capitalize mb-3 primary-color">
                                            customer name
                                        </h2>
                                        <p className="lead text-muted">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever to make a type specimen book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                    <div className="align-sefl-center ml-3">
                                        <img src="image/customer-5.jpeg" alt="" className="rounded-circle review-img" />
                                    </div>
                                    <div className="review-text px-5">
                                        <h2 className="text-capitalize mb-3 primary-color">
                                            customer name
                                        </h2>
                                        <p className="lead text-muted">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever to make a type specimen book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#slider" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a href="#slider" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
        </section>
    )
  }
}
