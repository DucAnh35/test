import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
            <div className="container">
                <div className="row height-90 align-items-center justify-content-center">
                    <div className="col">
                        <div className="banner text-center">
                            <h1 className="display-1 text-capitalize w-50 mx-auto">
                                <small>Sushi</small> <strong className="primary-color">monster</strong>
                            </h1>
                            <a href="#" className="btn main-btn sushi-btn my-4 text-capitalize">order online</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#special-items" className="btn header-link primary-color"><i className="fas fa-arrow-down"></i></a>
        </header>
      </div>
    )
  }
}
