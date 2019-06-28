import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UIkit from 'uikit';
import "./Principal.css"
import Footer from "../common/Footer"
import Navbar from "./Navbar";
import {getAllPosts} from "../../services/auth"
import ProjectModal from "../common/user/ProjectModal"
import img from '../../images/PP.png'

class Principal extends Component {

    state= {
        modal3Visible:false,
        projects: [],
        principals:[],
        user:JSON.parse(localStorage.getItem('USER'))
    };
    componentWillMount(){
        this.readPost()
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         /* nombrefuncion(datos).then(respuesta=>{ haces funciones o lo que sea o un console}).catch(err=>{console.log(err}) */
    //         getOwnPosts(user._id).then(res=>{
    //             this.setState({projects:res.data});
    //         }).catch(err=>{
    //             console.log("error:",err)
    //         });

    //         this.setState({user})
    //     }else{
    //         this.props.history.push('/')
    //     }

     };

     


readPost=(post)=>{
    getAllPosts().then(res => {
        console.log('ressss',res)
        this.setState({principals:res.post})
    }).catch(error=>console.log(error))
}


setNewPost=(data)=>{
let {principals}= this.state
principals.unshift(data)
this.setState({principals})
}

modalOpenProject=()=>{
    let {modal3Visible}=this.state;
    modal3Visible =! modal3Visible;
    console.log("modal",modal3Visible);
    this.setState({modal3Visible})
};

    render() {
        let {principals,modal3Visible,user} = this.state;
        let {setNewPost}=this
        return (
            <div>
               
                <Navbar></Navbar>
            {/* <div className="card-post uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <article className="uk-comment">
                    <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="true">
                        <div className="uk-width-auto">
                            <img className="uk-comment-avatar" src={img} width="80" height="80" alt="" />
                        </div>
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Titulo del post</a></h4>
                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li><a href="#">Nombre</a></li>
                                <li><a href="#">Apellido</a></li>
                            </ul>
                        </div>
                    </header>
                        <div className="uk-comment-body">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                </article>
            </div> */}
                 
            <div className='align-header'>
                <h2>Posts</h2>
                <div>
                     <button className='button-update' onClick={this.modalOpenProject}>Agrega un nuevo post</button>
                </div>
                <ProjectModal open={modal3Visible} close={this.modalOpenProject} setNewPost={setNewPost} user={user}/>
            </div>

            <div classname="cards">
                <h5>Aqui puedes ver los posts que ha hecho la comunidad.</h5>
            </div>
            <div className='uk-grid uk-flex uk-flex-center uk-column-1-2@'>
                {principals.length ? principals.map((data,i)=>
                    <ul key={i}>
                        <div className="uk-child-width-expand@s" uk-grid>
                            <div className='project-card'>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src={data.imagen} alt=""/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">{data.nombre}</h3>
                                        <p>{data.post}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                ) : ''}
            </div>
            <Footer/>
            </div>
            
        )
    }
}

export default Principal