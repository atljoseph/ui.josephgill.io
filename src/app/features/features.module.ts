import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features.routing';

import { HomeComponent } from './home/home.component';
import { PhotoAlbumComponent } from './photo-albums/photo-album/photo-album.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums/photo-albums.component';
import { MusicComponent } from './music/music.component';
import { SoundsComponent } from './sounds/sounds.component';
import { AboutComponent } from './about/about.component';
import { Soundboard2Component } from './sounds/soundboard2/soundboard2.component';
import { CodeLandingComponent } from './code/code-landing/code-landing.component';
import { CodeDetailComponent } from './code/code-detail/code-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule
  ],
  declarations: [
    HomeComponent,
    PhotoAlbumsComponent,
    MusicComponent,
    SoundsComponent,
    AboutComponent,
    Soundboard2Component,
    PhotoAlbumComponent,
    CodeLandingComponent,
    CodeDetailComponent,
  ]
})
export class FeaturesModule { }
