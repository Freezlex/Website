import React from "react"
import Header from "@components/header/header.component";
import Footer from "@components/footer/footer.component";
import HomeHeroComponent from "@views/home/home-hero/home-hero.component";

export default function HomeComponent() {
    return (
        <div className='page standard' id='home'>
            <Header/>
            <HomeHeroComponent/>
            <Footer/>
        </div>
    )
}
