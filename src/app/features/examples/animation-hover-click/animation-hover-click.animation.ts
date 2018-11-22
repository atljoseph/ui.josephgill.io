import {
    trigger,
    style,
    animate,
    transition,
    state,
    keyframes,
    group,
    animateChild,
    query
} from '@angular/animations';

const nohoverStyle = {
    transform: 'translateX(0px)'
};
const hoverStyle = {
    transform: 'translateX(10px)'
};
const clickStyle = {
    transform: `${hoverStyle.transform} translateY(10px)`,
    boxShadow: '0 1px 5px 0 rgba(0,0,0,0.3)'
};

export const HoverAnimation = trigger('HoverAnimation', [
    
    // enter / leave
    transition(":enter", [
        style({ opacity: 0 }),
        animate(`500ms ease-out`, style({ opacity: 1 }))
    ]),
    transition(":leave", [
        animate(`500ms ease-out`, style({ opacity: 0 }))
    ]),
    
    // hover / nohover
    state('nohover', style(nohoverStyle)),
    state('hover', style(hoverStyle)),
    transition('nohover <=> hover', [
        animate(`200ms ease-in-out`),
    ]),

    // click
    transition("hover <=> click", [
        animate(`125ms ease-in-out`, style(clickStyle))
    ]),

]);

