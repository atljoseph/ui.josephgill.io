
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const scrollAnimation = trigger('scrollAnimation', [
  state('show', style({
    opacity: 1,
    transform: "translateX(0)"
  })),
  // state('showPlaceholder', style({
  //   opacity: 0.7,
  //   transform: "translateX(0)"
  // })),
  // //
  state('hide', style({
    opacity: 0,
  })),
  // transition('hide <=> show', animate(`${500}ms ease-in-out`)),
  // //
  // state('hideLeft', style({
  //   opacity: 0,
  //   transform: "translateX(-100%)"
  // })),
  // state('hideRight', style({
  //   opacity: 0,
  //   transform: "translateX(100%)"
  // })),
  // transition('hideLeft <=> show, hideRight <=> show', animate(`${250}ms ease-in-out`)),
  // //
  // state('hideTop', style({
  //   opacity: 0,
  //   transform: "translateY(-200%)"
  // })),
  // state('hideBottom', style({
  //   opacity: 0,
  //   transform: "translateY(200%)"
  // })),
  // transition('hideBottom <=> show, hideTop <=> show', animate(`${350}ms ease-in-out`)),
  // //
  state('hideTopRight', style({
    opacity: 0,
    transform: "translateY(-50%) translateX(50%)"
  })),
  state('hideBottomLeft', style({
    opacity: 0,
    transform: "translateY(50%) translateX(-50%)"
  })),
  // transition('hideBottomLeft <=> show', animate(`${350}ms ease-in-out`)),
  // transition('hideTopRight <=> show', animate(`${350}ms ease-in-out`)),

  transition('hideBottomLeft => show', animate(`${350}ms ease-in-out`, keyframes([
    style({ opacity: 0, transform: "translateY(50%) translateX(-50%)", offset: 0 }),
    // style({ opacity: 0, transform: "translateY(100%) translateX(-100%) scale(0.5)", offset: 0 }),
    style({ opacity: 1, transform: "translateY(-0%) translateX(7%)", offset: 0.9 }),
    style({ opacity: 1, transform: "translateX(0)", offset: 1 }),
  ]))),
  transition('hideTopRight => show', animate(`${350}ms ease-in-out`, keyframes([
    style({ opacity: 0, transform: "translateY(-50%) translateX(50%)", offset: 0 }),
    // style({ opacity: 0, transform: "translateY(-100%) translateX(100%) scale(0.5)", offset: 0 }),
    style({ opacity: 1, transform: "translateY(0%) translateX(-7%)", offset: 0.9 }),
    style({ opacity: 1, transform: "translateX(0)", offset: 1 }),
  ]))),
]);