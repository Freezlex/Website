import React from "react";
import Logo from '../static/logo512.png'
import '../style/Home.css'

const rdmString = [
    'Tu le fais quand mon front 6rius ?',
    'Your average  OpenSource contributor',
    'Merci énormément pour les 500 ❤️',
    'Road to 1k followers !',
    'Nii-Saaaaaaaaaaaaaaaaaaaaaan'
]

class Home extends React.Component{

    randomString(){
        let index = Math.round(Math.random() * (rdmString.length - 1))
        return rdmString[index]
    }

    render() {
        return(
            <div className="home">
                <div className="context">
                    <div className="content">
                        <img className="content-item" id="logo" src={Logo} alt="Freezlex's logo"/>
                        <h1 className="content-item">Freezlex</h1>
                        <p className="content-item">{this.randomString()}</p>
                    </div>
                </div>
                <div className="area">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home
