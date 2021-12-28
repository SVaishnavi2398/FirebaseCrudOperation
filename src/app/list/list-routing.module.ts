import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  
export class ListRoutingModule { }
