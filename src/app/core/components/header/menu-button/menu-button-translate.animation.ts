import {
    trigger,
    style,
    animate,
    transition,
    state,
    keyframes,
    group,
    sequence,
    query,
    animateChild
} from '@angular/animations';

import { 
    menuWidthWhenOpened, 
    menuButtonDiameter,
    menuButtonMargin,
    menuButtonAnimationDuration
} from '../../style.constants';

const menuButtonLeftOffsetOpened = menuWidthWhenOpened - menuButtonDiameter + menuButtonMargin;
// const menuButtonLeftOffsetOpened = menuWidthWhenOpened - (menuButtonDiameter/2);

export const MenuButtonTranslateOpenCloseAnimation = trigger('MenuButtonTranslateOpenCloseAnimation',[
    state('opening', style({
        left: `calc(100% - ${menuButtonDiameter}px)`
        // left: `${menuButtonLeftOffsetOpened}px`
    })),
    state('closing, void', style({
        left: `${menuButtonMargin}px`
    })),
    transition('closing <=> opening, void <=> opening', [
        animate(`${menuButtonAnimationDuration}ms ease-in-out`), // button beats the menu
        animateChild()
    ]),
]);

// export const MenuButtonTranslatePageAnimation = trigger('MenuButtonTranslatePageAnimation',[
//     state('navStart, void', style({
//         transform: `translateX(100%)`
//     })),
//     state('navEnd, void', style({
//         transform: `translateX(0%)`
//     })),
//     transition('navStart => navEnd, void => navEnd', [
//         animate(`${500}ms ease-out`), // button beats the menu
//     ]),
// ]);