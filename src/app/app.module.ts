import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StartupService } from './startup.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StartupGridComponent } from './startup-grid/startup-grid.component';
import { CircleComponent } from './circle/circle.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StartupDetailComponent } from './startup-detail/startup-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StartupGridComponent,
    CircleComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    StartupDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StartupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
