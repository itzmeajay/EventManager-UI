import { NgModule, Component } from '@angular/core';
import{ AddeventcomponentComponent }from './addeventcomponent/addeventcomponent.component'
import { Routes, RouterModule } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


const routes: Routes = [
  {
    path:'events',
    component:AddeventcomponentComponent
  },
  {
    path:'event',
    component:AddeventcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }