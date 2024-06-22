import React from "react";
import "./projects-hero.component.css";
import { Link } from "react-router-dom";

export default function ProjectsHeroComponent() {
  return (
    <div className="projects-hero">
      <div className="h-section">
        <h1>
          All my <a className="primary">Projects</a>.
        </h1>
      </div>
      <div className="h-section">
        <p>
          Because I spend my life having new projects, starting them and never
          finishing them, this page gives you inspiration if you ever get bored.
        </p>
        <p className={"silent"}>
          Maybe one day I’ll take the time to finish one or two of them.
        </p>
      </div>
      <div className="h-section">
        <Link to="/#grid-more">
          <button className="primary">Learn more</button>
        </Link>
        <Link to="/about">
          <button className="secondary">About me</button>
        </Link>
      </div>
    </div>
  );
}
