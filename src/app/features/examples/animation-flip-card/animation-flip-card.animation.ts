import {
    trigger,
    state,
    style,
    animation,
    transition, 
    keyframes,
    group,
    query,
    stagger,
    animateChild,
    animate
} from '@angular/animations';

const defaultDuration = 500;

export const FadeOuterAnimation = trigger('FadeOuterAnimation', [
    state('void', style({
        opacity: 0
    })),
    state('*', style({
        opacity: 1
    })),
    transition('void <=> *', [
        animate(`${defaultDuration}ms ease-in-out`),
        query('@FlipYAnimation', [
            animateChild()
        ])
    ])
]);

export const FlipYAnimation = trigger('FlipYAnimation', [
    state('front', style({
        transform: 'rotateY(0deg)'
    })),
    state('back', style({
        transform: 'rotateY(-180deg)'
    })),
    transition('front <=> back', [
        animate(`${defaultDuration}ms ease-in-out`),
    ])
]);
export const fadeInnerAnimation = trigger('fadeInnerAnimation', [
    state('void', style({
        opacity: 0
    })),
    state('*', style({
        opacity: 1
    })),
    transition('void <=> *', [
        animate(`${defaultDuration}ms ease-in-out`),
    ])
]);