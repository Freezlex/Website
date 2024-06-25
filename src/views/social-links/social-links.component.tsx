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
            All the social networks where you’ll find me, don’t hesitate to join
            me!
          </p>
          <p className={"silent"}>
            And maybe one day I’ll be more regular on twitch...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
