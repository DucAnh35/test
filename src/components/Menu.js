import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
        <section id="menu" className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <h1 className="primary-color text-uppercase">soups</h1>
                            </div>
                        </div>
                        <div className="single-item d-flex justify-content-between my-3 p-3 ">
                            <div className="single-item-text">
                                <h2 className="text-uppercase text-dark">soup</h2>
                                <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className="single-item-price align-self-end">
                                <h1 className="text-uppercase text-dark">$10</h1>
                            </div>
                        </div>

                        <div className="single-item d-flex justify-content-between my-3 p-3 special">
                            <div className="single-item-text">
                                <h2 className="text-uppercase text-dark">soup</h2>
                                <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className="single-item-price align-self-end">
                                <h1 className="text-uppercase text-dark">$10</h1>
                            </div>
                            <h3 className="special-text text-capitalize">chef selection</h3>
                        </div>

                        <div className="row">
                                <div className="col">
                                    <h1 className="primary-color text-uppercase">sushi</h1>
                                </div>
                            </div>
                            <div className="single-item d-flex justify-content-between my-3 p-3 ">
                                <div className="single-item-text">
                                    <h2 className="text-uppercase text-dark">sushi</h2>
                                    <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="single-item-price align-self-end">
                                    <h1 className="text-uppercase text-dark">$10</h1>
                                </div>
                            </div>
        
                            <div className="single-item d-flex justify-content-between my-3 p-3 special">
                                <div className="single-item-text">
                                    <h2 className="text-uppercase text-dark">sushi</h2>
                                    <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="single-item-price align-self-end">
                                    <h1 className="text-uppercase text-dark">$10</h1>
                                </div>
                                <h3 className="special-text text-capitalize">chef selection</h3>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <h1 className="primary-color text-uppercase">sushimi</h1>
                            </div>
                        </div>

                        <div className="single-item d-flex justify-content-between my-3 p-3 special">
                                <div className="single-item-text">
                                    <h2 className="text-uppercase text-dark">sushimi</h2>
                                    <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="single-item-price align-self-end">
                                    <h1 className="text-uppercase text-dark">$10</h1>
                                </div>
                                <h3 className="special-text text-capitalize">chef selection</h3>
                            </div>
        
                        <div className="single-item d-flex justify-content-between my-3 p-3 ">
                            <div className="single-item-text">
                                <h2 className="text-uppercase text-dark">sushimi</h2>
                                <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className="single-item-price align-self-end">
                                <h1 className="text-uppercase text-dark">$10</h1>
                            </div>
                        </div>

                      
                        <div className="row">
                            <div className="col">
                                <h1 className="primary-color text-uppercase">rolls</h1>
                            </div>
                        </div>


                        <div className="single-item d-flex justify-content-between my-3 p-3 special">
                            <div className="single-item-text">
                                <h2 className="text-uppercase text-dark">roll</h2>
                                <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className="single-item-price align-self-end">
                                <h1 className="text-uppercase text-dark">$10</h1>
                            </div>
                            <h3 className="special-text text-capitalize">chef selection</h3>
                        </div>

                        <div className="single-item d-flex justify-content-between my-3 p-3 ">
                            <div className="single-item-text">
                                <h2 className="text-uppercase text-dark">roll</h2>
                                <h4 className="text-muted">Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className="single-item-price align-self-end">
                                <h1 className="text-uppercase text-dark">$10</h1>
                            </div>
                        </div>
        
                            
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
