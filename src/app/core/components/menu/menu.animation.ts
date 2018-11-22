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

import { 
    menuWidthWhenOpened, 
    menuExposedWhenClosedWidth,
    menuAnimationDuration
} from '../style.constants';

export const menuOpenCloseAnimation = trigger('menuOpenCloseAnimation',[
    state('opening', style({
        transform: 'translateX(0%)',
        opacity: 1
        // left: `${0}px`
    })),
    state('closing, void', style({
        transform: 'translateX(-100%)',
        opacity: 0
        // left: `${menuExposedWhenClosedWidth - menuWidthWhenOpened}px`
    })),
    transition('closing <=> opening, void <=> opening', [
        animate(menuAnimationDuration),
        animateChild(),
    ])
]);

