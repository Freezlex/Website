import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import {ProjectsComponent } from './applications/projects/projects.component'
import { BlogComponent } from './applications/blog/blog.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "app", children: [
      {path: "projects", component: ProjectsComponent, outlet: "application"},
      {path: "blog", component: BlogComponent, outlet: "application"},
    ]},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
