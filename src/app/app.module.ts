import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './applications/projects/projects.component';
import { ApplicationsComponent } from './applications/applications.component';
import { HeaderComponent } from './applications/main/header/header.component';
import { FooterComponent } from './applications/main/footer/footer.component';
import { BlogComponent } from './applications/blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlashbangComponent } from './applications/other/flashbang/flashbang.component';
import { FlashbangSidebarComponent } from './applications/other/flashbang/flashbang-sidebar/flashbang-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectsComponent,
    ApplicationsComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    PageNotFoundComponent,
    FlashbangComponent,
    FlashbangSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
