import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a href="#" className="navbar-brand text-uppercase primary-color">sushi monster</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <div className="toggler-btn">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                </div>
            </button>

            <div className="collapse navbar-collapse" id="myNavbar">

                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#special-items" className="nav-link text-capitalize">special item</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu" className="nav-link text-capitalize">menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link text-capitalize">about</a>
                    </li>
                    <li className="nav-item">
                        <a href="#reviews" className="nav-link text-capitalize">reviews</a>
                    </li>
                    <li className="nav-item">
                        <a href="#item" className="nav-link text-capitalize">team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link text-capitalize">contact</a>
                    </li>
                </ul>

                <form className="form-inline d-none d-lg-block mr-5">
                    <button className="btn nav-btn text-capitalize" type="button">order online</button>
                </form>
            </div>
        </nav>
    )
  }
}
