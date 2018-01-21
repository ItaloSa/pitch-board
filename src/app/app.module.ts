import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { StartupService } from './startup.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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

const firebase = {
  apiKey: "AIzaSyAQK8BPa-MRtALeyFFIAjzBvFWTl45UTJk",
  authDomain: "pitchboard-42bba.firebaseapp.com",
  databaseURL: "https://pitchboard-42bba.firebaseio.com",
  projectId: "pitchboard-42bba",
  storageBucket: "pitchboard-42bba.appspot.com",
  messagingSenderId: "579630963642"
}

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
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [StartupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
