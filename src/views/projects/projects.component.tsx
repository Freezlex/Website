import React from "react";
import "./projects.component.css";
import Header from "@components/header/header.component";
import Footer from "@components/footer/footer.component";
import ProjectsHeroComponent from "@views/projects/projects-hero/projects-hero.component";

export default function ProjectsComponent() {
  return (
    <div className="page standard">
      <Header />
      <ProjectsHeroComponent />
      <Footer />
    </div>
  );
}
