import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './applications/projects/projects.component';
import { ApplicationsComponent } from './applications/applications.component';
import { HeaderComponent } from './applications/header/header.component';
import { FooterComponent } from './applications/footer/footer.component';
import { BlogComponent } from './applications/blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectsComponent,
    ApplicationsComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
