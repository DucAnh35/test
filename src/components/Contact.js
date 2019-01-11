import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
   
        <section id="contact">
            <div className="container-fluid no-padding">
                <div className="row">
                    <div className="col-md-6 my-3 ">
                        <div className="embed-responsive embed-responsive-21by9 height-60">
                            <iframe className="embed-responsive-item" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667009926!2d108.17168630519498!3d16.0471659068794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1544334339732" 
                             >
                            </iframe>
                        </div>

                    </div>
                    <div className="col-md-6 my-3 align-self-center">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1 className="text-uppercase">contact list</h1>
                            </div>
                            <div className="card-body">
                                <form >
                                    <div className="input-group my-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="input-text">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <input type="text" id="text" className="form-control form-control-lg" placeholder="Enter your name here" />
                                    </div>
                                    <div className="input-group my-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="input-phone">
                                                <i className="fas fa-phone"></i>
                                            </span>
                                        </div>
                                        <input type="text" id="phone" className="form-control form-control-lg" placeholder="Enter your phone here" />
                                    </div>
                                    <div className="input-group my-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="input-email">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <input type="email" id="text" className="form-control form-control-lg" placeholder="Enter your email here"/>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-lg text-uppercase contact-btn">
                                        <i className="far fa-hand-point-right mr-2"></i>
                                        click here
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
  }
}
