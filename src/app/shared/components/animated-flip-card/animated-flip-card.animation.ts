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

const defaultDuration = 400;

const durations = { ultrafast: 175, faster: 250, fast: 325, medium: 400, slow: 500, slower: 600 };
const items = [];
Object.keys(durations).forEach(durationName => {
    const duration = durations[durationName];
    items.push(state(`front-${durationName}`, style({
        transform: 'rotateY(0deg)'
    })));
    items.push(state(`back-${durationName}`, style({
        transform: 'rotateY(-180deg)'
    })));
    items.push(transition(`front-${durationName} <=> back-${durationName}, * <=> back-${durationName}, front-${durationName} <=> *`, [
        animate(`${duration}ms ease-in-out`),
    ]));
});

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
    ]),
    // ...items
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