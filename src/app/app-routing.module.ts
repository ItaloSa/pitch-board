import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StartupDetailComponent } from './startup-detail/startup-detail.component';
import {CadastroComponent} from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'startup/:id', component: StartupDetailComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
