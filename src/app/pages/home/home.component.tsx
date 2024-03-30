import React from "react";
import './home.component.scss'
import Header from "@shared/header/header.component";
import Footer from "@shared/footer/footer.component";
import TemporaryHomeBody from "@components/home/temp-home-body/temporary-home.component";

export default function HomeComponent() {
    return (
        <div className='page standard' id='home'>
            <Header/>
            <TemporaryHomeBody/>
            <Footer/>
        </div>
    );
}
