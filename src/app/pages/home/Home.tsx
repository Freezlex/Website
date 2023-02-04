import React, {Component, useEffect} from "react";
import {TextDecrypt} from "../../components/TextDecrypt";
import './Home.scss'

export default class Home extends Component {
    render() {
        return <div className={"home"}>
            <h1 className={"hero-greetings"}>Hey ! I am <TextDecrypt className={"hero-nickname"} text={'Freezlex'}/></h1>
            <h2><TextDecrypt className={"hero-subtitle developer"} text={'Developer'}/></h2>
            <h2><TextDecrypt className={"hero-subtitle streamer"} text={'Streamer'}/></h2>
        </div>
    }
}
