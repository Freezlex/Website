import './not-found.component.scss'
import React from "react";
import Header from "@shared/header/header.component";
import Footer from "@shared/footer/footer.component";

export default function NotFoundComponent() {
    return<div className='page standard'>
        <Header/>
        <p>Huuu ... It’s weird</p>
        <Footer/>
        </div>;
}
