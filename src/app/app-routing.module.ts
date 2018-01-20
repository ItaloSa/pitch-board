import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StartupDetailComponent } from './startup-detail/startup-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'startup/:id', component: StartupDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
