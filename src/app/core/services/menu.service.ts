import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isVisible: boolean = false;
  private animationTranslationDirection: number = 0;
  animationMenuButtonRotationState: string = 'closing';
  // animationMenuButtonTranslationState: string = 'closing';

  constructor(
  ) { 
  }

  show() {
    this.isVisible = true;
    this.animationMenuButtonRotationState = 'opening';
  }

  hide() {
    this.isVisible = false;
    this.animationMenuButtonRotationState = 'closing';
  }

  toggle() {
    this.isVisible ? this.hide() : this.show();
  }

  get isOpened() {
    return this.isVisible;
  }

  get isAnimating() {
    return this.animationTranslationDirection == 0;
  }

  //

  // get animationState(): string {
  //   // return 'opened';
  //   return this.isVisible ? 'opened' : 'closed';
  // }

  //

  onAnimationRotateDone(event: any) {
    this.animationTranslationDirection = this.isVisible ? 1 : -1;
    // console.log('done', this.animationTranslationDirection, this.animationMenuButtonTranslateState);
  }

  onAnimationRotateStart(event: any) {
    this.animationTranslationDirection = this.isVisible ? 1 : -1;
    // console.log('start', this.animationTranslationDirection, this.animationMenuButtonTranslateState);
  }

  get animationMenuButtonTranslationState(): string {
    if (this.animationTranslationDirection > 0) return 'opening';
    else if (this.animationTranslationDirection < 0) return 'closing';
    else return 'rest';
  }

  // get animationMenuButtonRotation2State(): string {
  //   if (this.animationTranslationDirection > 0) return 'opening';
  //   else if (this.animationTranslationDirection < 0) return 'closing';
  //   else return 'rest';
  // }

  //
}
