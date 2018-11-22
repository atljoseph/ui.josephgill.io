import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../features/home/home.component';
import { AboutComponent } from '../features/about/about.component';

const routes: Routes = [{
  path: '', component: HomeComponent//, canActivate: [true]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
