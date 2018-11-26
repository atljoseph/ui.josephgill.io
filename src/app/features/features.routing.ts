import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SoundsComponent } from './sounds/sounds.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
// import { Photos2Component } from './photos-2/photos.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent//, canActivate: [true]
  },
  {
    path: 'about', component: AboutComponent//, canActivate: [true]
  },
  {
    path: 'sounds', component: SoundsComponent//, canActivate: [true]
  },
  {
    path: 'music', component: MusicComponent//, canActivate: [true]
  },
  // {
  //   path: 'photos2', component: Photos2Component//, canActivate: [true]
  // },
  {
    path: 'photos', component: PhotosComponent//, canActivate: [true]
  },
  {
    path: 'examples', component: ExamplesComponent//, canActivate: [true]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
