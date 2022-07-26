import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class AppRoutingModule { }