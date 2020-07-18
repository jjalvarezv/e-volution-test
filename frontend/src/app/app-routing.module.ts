import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components for routing

import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
