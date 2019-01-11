import React, { Component } from 'react'

export default class Special extends Component {
  render() {
    return (
        <section className="py-5" id="special-items">
            <div className="container my-5">
                <div className="row parent-container">
                    <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src="image/1.jpg" className="img-fluid img-thumbnail item-img" alt="menu item"/>
                            <a href="image/1.jpg">
                                <h1 className="text-uppercase text-center item-link px-3">menu item</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src="image/4.jpg" className="img-fluid img-thumbnail item-img" alt="menu item"/>
                            <a href="image/4.jpg">
                                <h1 className="text-uppercase text-center item-link px-3">menu item</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src="image/4.jpeg" className="img-fluid img-thumbnail item-img" alt="menu item"/>
                            <a href="image/4.jpeg">
                                <h1 className="text-uppercase text-center item-link px-3">menu item</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src="image/8.jpeg" className="img-fluid img-thumbnail item-img" alt="menu item"/>
                            <a href="image/8.jpeg">
                                <h1 className="text-uppercase text-center item-link px-3">menu item</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src="image/9.jpeg" className="img-fluid img-thumbnail item-img" alt="menu item"/>
                            <a href="image/9.jpeg">
                                <h1 className="text-uppercase text-center item-link px-3">menu item</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src="image/3.jpeg" className="img-fluid img-thumbnail item-img" alt="menu item"/>
                            <a href="image/3.jpeg">
                                <h1 className="text-uppercase text-center item-link px-3">menu item</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
