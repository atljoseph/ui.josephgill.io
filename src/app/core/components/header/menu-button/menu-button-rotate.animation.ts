import {
    trigger,
    style,
    animate,
    transition,
    state,
    keyframes,
    group,
    sequence,
    animateChild
} from '@angular/animations';

import { 
    menuButtonAnimationDuration,
    menuAnimationDuration
} from '../../style.constants';

export const MenuButtonRotateAnimation = trigger('MenuButtonRotateAnimation',[
    state('opening', style({
        transform: `rotate(720deg)`,// 360 * n for globe
        // transform: `rotate(1440deg)`,// 360 * n for globe
        // transform: `rotate(1620deg)`,// scale(1.1)`, // (360 * n) + 180 for triangle
    })),
    state('closing, void', style({
        transform: `rotate(-720deg)`,//  scale(1.1)`,
    })),
    // state('rest, void', style({
    //     transform: `rotate(0deg)`,//  scale(1.1)`,
    // })),
    transition('closing <=> opening, void <=> opening', [
        animate(`${menuAnimationDuration}ms ease-in-out`),
        animateChild()
    ]),

    // state('rest', style({
    //     transform: `rotate(-720deg)`,
    // })),
    // transition('* => opening, void => opening', [
    //     animate(`${menuAnimationDuration}ms ease`, style({
    //         transform: `rotate(0deg)`,
    //     })),
    //     animateChild()
    // ]),
    // transition('* => closing', [
    //     animate(`${menuAnimationDuration}ms ease`, style({
    //         transform: `rotate(720deg)`,
    //     })),
    //     animateChild()
    // ]),
]);