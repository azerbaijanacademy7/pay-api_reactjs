import React from 'react';
import { NavLink } from "react-router-dom";
import './component-styles/footerStyle.css';
import logo from '../assets/shared/desktop/logo.svg'
import facebook from '../assets/shared/desktop/facebook.svg'
import twitter from '../assets/shared/desktop/twitter.svg'
import linkedin from '../assets/shared/desktop/linkedin.svg'
export const Footer = () => {
    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-2 p-0">
                     <NavLink exact to = "/"><img className="logo" src={logo} alt="logo"></img></NavLink> 
                    </div>
                
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="footer_link">
                                    <NavLink className = "nav_link" to = "/pricing">Pricing</NavLink>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="footer_link">
                                    <NavLink className = "nav_link" to = "/about">About</NavLink>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="footer_link">
                                    <NavLink className = "nav_link" to = "/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="social">
                            <div className="row">
                                <div className="col-4 col-lg-3">
                                    <img src={facebook} alt="social icon"/>                
                                </div>
                                <div className="col-4 col-lg-3">
                                    <img src={twitter} alt="social icon"/>
                                </div>
                                <div className="col-4 col-lg-3">
                                    <img src={linkedin} alt="social icon"/>                        
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="circle_footer"></div>
        </div>
    )
}