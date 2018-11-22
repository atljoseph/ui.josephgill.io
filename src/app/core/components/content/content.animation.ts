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

import { routerContentAnimationDuration } from '../style.constants';

export const RouterAnimation = trigger('RouterAnimation', [
    transition('* => *',[
        style({ 
            // transform: 'translateX(100%)',
            transform: 'translateY(100px) translateX(100px)',
            opacity: 0
        }), 
        animate(`${routerContentAnimationDuration}ms ease-in-out`, style({ 
            // transform: 'translateX(0%)',
            transform: 'translateY(0%) translateX(0%)',
            opacity: 1
        }))
    ]),
]);
