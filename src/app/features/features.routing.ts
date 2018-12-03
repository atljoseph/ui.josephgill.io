import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SoundsComponent } from './sounds/sounds.component';
import { MusicComponent } from './music/music.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums/photo-albums.component';
import { PhotoAlbumComponent } from './photo-albums/photo-album/photo-album.component';
import { ExamplesComponent } from './examples/examples.component';
// import { TipsComponent } from './tips/tips/tips.component';
// import { TipComponent } from './tips/tip/tip.component';

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
  {
    path: 'photo-albums', component: PhotoAlbumsComponent//, canActivate: [true]
  },
  {
    path: 'photo-albums/:photoAlbumKey', component: PhotoAlbumComponent//, canActivate: [true]
  },
  {
    path: 'examples', component: ExamplesComponent//, canActivate: [true]
  },
  // {
  //   path: 'tips', component: TipsComponent//, canActivate: [true]
  // },
  // {
  //   path: 'tips/:tipKey', component: TipComponent//, canActivate: [true]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
