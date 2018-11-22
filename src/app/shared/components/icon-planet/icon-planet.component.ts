import { Component, OnInit, Input } from '@angular/core';

// this animation broke the build when it wasn't used but imported
// import { IconPlanetRotateAnimation } from './icon-planet-rotate.animation';

@Component({
  selector: 'app-shared-icon-planet',
  templateUrl: './icon-planet.component.html',
  styleUrls: ['./icon-planet.component.scss'],
  // animations: [IconPlanetRotateAnimation]
})
export class IconPlanetComponent implements OnInit {

  @Input() isAnimating: boolean = true;
  @Input() showMoon: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  startAnimation() {
    this.isAnimating = true;
  }

  // animationStateNumeric: number;

  // constructor() { }

  // ngOnInit() {
  //   this.animationStateNumeric = 0;
  //   // this.isAnimating = false;
  // }

  // startAnimation(degrees?: number) {
  //   // this.animationState = 'fullcircle';
  //   this.animationStateNumeric = degrees || 360;
  //   // this.isAnimating = true;
  //   console.log('animate', this.animationStateNumeric);
  // }

  // onAnimationDone(event) {
  //   console.log(event.fromState + ' ==> ' + event.toState);
  //   if (this.animationStateNumeric > 0 && event.toState && event.toState == this.animationStateNumeric.toString()) {
  //     this.animationStateNumeric = 0;
  //     // this.isAnimating = false;
  //     console.log('animate', this.animationStateNumeric);
  //     setTimeout(()=> {
  //       this.startAnimation(720);
  //     }, 1000);

  //   }
  // }

  // get animationState(): string {
  //   return this.animationStateNumeric.toString();
  // }

}
