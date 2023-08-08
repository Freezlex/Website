import React from "react";
import './home.component.scss'
import Hero from "@components/home/hero/hero";
import Header from "@shared/header/header.component";
import Footer from "@shared/footer/footer.component";
import HomeCards from "@components/home/homeCard/home-cards.component";

export default function HomeComponent() {
    return (
        <div className='page standard' id='home'>
            <Header/>
            <Hero/>
            <HomeCards/>
            <Footer/>
        </div>
    );
}
