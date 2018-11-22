import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverDirective } from './directives/hover.directive';

import { ModalComponent } from './components/modal/modal.component';
import { HoverButtonComponent } from './components/hover-button/hover-button.component';
import { IconPlanetComponent } from './components/icon-planet/icon-planet.component';
import { IconSunComponent } from './components/icon-sun/icon-sun.component';
import { AnimatedFlipCardComponent } from './components/animated-flip-card/animated-flip-card.component';
import { ScrollFlyInComponent } from './components/scroll-fly-in/scroll-fly-in.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HoverDirective,

    ModalComponent,
    HoverButtonComponent,
    IconPlanetComponent,
    IconSunComponent,
    AnimatedFlipCardComponent,
    ScrollFlyInComponent
  ],
  exports: [
    HoverDirective,

    ModalComponent,
    HoverButtonComponent,
    IconPlanetComponent,
    IconSunComponent,
    AnimatedFlipCardComponent,
    ScrollFlyInComponent
  ]
})
export class SharedModule { }
