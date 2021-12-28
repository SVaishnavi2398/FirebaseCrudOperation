import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{RouterModule}from'@angular/router';
import { ListRoutingModule } from './list-routing.module';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HomeComponent, ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ListModule {
constructor(){

  } }
