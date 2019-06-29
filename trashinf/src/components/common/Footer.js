import React, {Component} from 'react';
import './Footer.css';
import Logo from '../../images/LogoTrashIn.png';
import {Link} from "react-router-dom";

export const FooterH=()=>(
    <div className="uk-child-width-expand@s">
        <div className='footer uk-flex uk-wrap'>
            <ul className="uk-list uk-list-large">
                <div className='logomin'>
                    <Link to={"/"}><img src={Logo} width="150px" alt="H"/></Link>
                </div>
                <div className='footer-links'>
                    <Link to="#"><li><span uk-icon="icon: facebook"></span> Facebook</li></Link>
                    <Link to='#'><li><span uk-icon="icon: twitter"></span> twitter</li></Link>
                    <Link to='#'><li><span uk-icon="icon: instagram"></span> instagram</li></Link>
                </div>
            </ul>
        </div>
    </div>
);

export default FooterH;