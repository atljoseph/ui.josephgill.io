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
import { SoundboardComponent } from './examples/soundboard/soundboard.component';
import { SoundboardCellComponent } from './examples/soundboard/soundboard-cell/soundboard-cell.component';
import { AnimationHoverClickComponent } from './examples/animation-hover-click/animation-hover-click.component';
import { ExamplesComponent } from './examples/examples.component';
import { AnimationFlipCardComponent } from './examples/animation-flip-card/animation-flip-card.component';
import { Soundboard2Component } from './sounds/soundboard2/soundboard2.component';
import { ProgrammingTipsComponent } from './programming-tips/tips/tips.component';
import { ProgrammingTipComponent } from './programming-tips/tip/tip.component';

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
    SoundboardComponent,
    SoundboardCellComponent,
    AnimationHoverClickComponent,
    ExamplesComponent,
    AnimationFlipCardComponent,
    Soundboard2Component,
    PhotoAlbumComponent,
    ProgrammingTipsComponent,
    ProgrammingTipComponent,
  ]
})
export class FeaturesModule { }
