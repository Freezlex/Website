import Footer from "@components/footer/footer.component";
import Header from "@components/header/header.component";
import "./social-links.component.css";
import React from "react";

export default function SocialLinksComponent() {
  return (
    <div className="page standard">
      <Header />
      <div className="links-hero">
        <div className="h-section">
          <h1>
            All my <a className="primary">Social Medias</a>.
          </h1>
        </div>
        <div className="h-section">
          <p>
            Because I spend my life having new projects, starting them and never
            finishing them, this page gives you inspiration if you ever get
            bored.
          </p>
          <p className={"silent"}>
            Maybe one day I’ll take the time to finish one or two of them.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
