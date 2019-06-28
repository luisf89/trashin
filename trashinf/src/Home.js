import React, { Component } from 'react';
import UIkit from 'uikit';
import Navbar from "./components/common/Navbar";
import { Link } from 'react-router-dom';
import {FooterH} from '../src/components/common/Footer'
import Quote from "../../trashinf/src/components/home/Quote";
import {Hw} from '../../trashinf/src/components/home/Hw';
import img from '../../trashinf/src/images/bellota.jpg'
import img2 from '../../trashinf/src/images/river.jpg'
import img3 from '../../trashinf/src/images/air.jpg'
import img4 from '../../trashinf/src/images/Recycling.png'
import img5 from '../../trashinf/src/images/Green.png'
import img6 from '../../trashinf/src/images/Skyline.png'
import img7 from '../../trashinf/src/images/smile.jpg'

import './App.css'
import Cards from './components/common/Cards';

class Home extends Component{

  state={ 
    info:[
      {
        image:img4,
        title:'Reusar',
        description:'Al reusar lo que ya no sirve ayudamos a la producción de menos materia prima, nuestra meta principal es esta.'
      },
      {
        image:img5,
        title:'Get Green',
        description:'Queremos hacer que la ayuda ambiental de la ciudad cada día sea más facil y que la gente aprenda de la conciencia verde.'
      },
      {
        image:img6,
        title:'Mejores Ciudades',
        description:'Nuestra página refleja las acciones que se llevan acabo, y muestra de manera trasnparante lo que se hace con el material reciclado.'
      }
    ]
  }
  render() {
    let {info}= this.state
      return (
        //   <div>
        //     <Navbar></Navbar>
        //     <div className="slide" uk-slideshow="animation: push">
            
        //       <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1">
              
        //           <ul className="uk-slideshow-items slide">
        //               <li>
                      
        //                   <img className="slide" src={img3} alt="" uk-cover='true'/>
        //                   <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        //                     <br/>
        //                     <h1 className="subtitulo" uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5">Energia Renovable</h1><br/>
        //                     <div class="uk-card uk-card-secondary opacity"  uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">
        //                       <p className="subtitulo-texto" uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">Nuestro planeta esta en peligro y necesitamos empezar a concientizar a la gente para reutilizar</p>
        //                     </div>
        //                   </div>
        //               </li>
        //               <li>
        //                   <img className="slide" src={img2} alt="" uk-cover='true'/>
        //                   <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        //                   <br/>
        //                   <br/>
        //                     <h1 className="subtitulo" uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">Un Futuro Más Verde</h1><br/>
        //                     <div class="uk-card uk-card-secondary opacity"  uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">
        //                     <p className="subtitulo-texto" uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">No dejemos que nuestros bosques sean talados, un futuro sin naturaleza es lo que nos espera si no empezamos ya!</p>
        //                     </div>
        //                   </div>
        //               </li>
        //               <li>
        //                   <img className="slide" src={img} alt="" uk-cover='true'/>
        //                   <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        //                   <br/>
        //                   <br/>
        //                     <h1 className="subtitulo" uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">Todos Ayudando a Cambiar</h1><br/>
        //                     <div class="uk-card uk-card-secondary opacity"  uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">
        //                     <p className="subtitulo-texto" uk-parallax="opacity: 0,8; y: 30,0; viewport: 0.5;">Todos somos responsables de ayudar a contribuir, y en un lugar como la Ciudad de México puede ser muy fácil.</p>
        //                     </div>
        //                   </div>
        //               </li>
        //           </ul>

        //           <a className="uk-position-center-left uk-position-small uk-light uk-hidden-hover" href="#" uk-slidenav-previous='true' uk-slideshow-item="previous"></a>
        //           <a className="uk-position-center-right uk-position-small uk-light uk-hidden-hover" href="#" uk-slidenav-next='true' uk-slideshow-item="next"></a>

        //       </div>
        //     </div>
        //     <div className="space uk-child-width-1-4@m uk-flex uk-flex-wrap uk-flex-center ">
        //       {info.map((data,i)=> <Cards key={i} {...data}/>)}
            
        //     </div>
        //     <div>
        //       <img className="semi" src={img7} />
        //       <p>Contribuye con tu granito de arena</p>
        //     </div>
        //     <div className="final">

        //     </div>
        // </div>
        <div>
          <Navbar></Navbar>
          <div className='header uk-height-large uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light'
                     data-src={img3}
                     data-srcset={img3}
                     uk-img="true">


                    <h1 className="header_text"> TE TOCA DARLE AL MUNDO LO QUE YA TE DIO</h1>

                    <div className='cta_header'>
                    </div>
                </div>
                <Hw/>
                <Quote/>
                <FooterH/>
        </div>
      )
  }
}

export default Home