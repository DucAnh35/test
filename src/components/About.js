import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-4">
                        <h1 className="text-uppercase display-3">about us</h1>
                        <h2 className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever to make a type specimen book.
                        </h2>
                        <a href="#" className="btn main-btn my-4 text-capitalize">learn more</a>
                    </div>
                    <div className="col-md-6 about-pictures my-4 d-none d-lg-block">
                        <img src="image/9.jpeg" alt="" className="img-1 img-thumbnail about-image"/>
                        <img src="image/3.jpeg" alt="" className="img-2 img-thumbnail about-image"/>
                        <img src="image/4.jpg" alt="" className="img-3 img-thumbnail about-image"/>
                        <img src="image/5.jpeg" alt="" className="img-4 img-thumbnail about-image"/>
                        <img src="image/6.jpeg" alt="" className="img-5 img-thumbnail about-image"/>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
