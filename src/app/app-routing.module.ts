import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import {ProjectsComponent } from './applications/projects/projects.component'
import { BlogComponent } from './applications/blog/blog.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import {ApplicationsComponent} from "./applications/applications.component";
import {FlashbangComponent} from "./applications/other/flashbang/flashbang.component";

const routes: Routes = [
  {path: "", component: HomepageComponent},
  /*{path: "p", component: ApplicationsComponent, children: [
      {path: "projects", component: ProjectsComponent},
      {path: "blog", component: BlogComponent},
    ]},*/
  {path: "flashbang", component: FlashbangComponent},
  {path: '**', pathMatch: 'full', redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
