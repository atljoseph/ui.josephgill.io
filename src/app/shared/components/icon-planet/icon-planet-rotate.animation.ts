// import {
//     trigger,
//     style,
//     animate,
//     transition,
//     state,
//     keyframes,
//     group,
//     sequence,
//     animateChild
// } from '@angular/animations';
// import { single } from 'rxjs/operators';

// const singleDuration = 1000;
// const sizes = [0, 90, 180, 270, 360, 720, 1060];
// const states = sizes.map(size => {
//     return state(`${size}`, style({
//         transform: `rotate(${size}deg)`
//     }));
// });

// const transitions = [];
// sizes.forEach((thisSize) => {
//     sizes.forEach((thatSize) => {
//         if (thatSize > thisSize) {
//             const percent = Math.abs(thatSize - thisSize) / 360;
//             const trans = transition(`${thisSize} => ${thatSize}`, [
//                 animate(`${(percent * singleDuration).toFixed(2)}ms`)
//             ]);
//             transitions.push(trans);
//         }
//     });
    
// });

// export const IconPlanetRotateAnimation = trigger('IconPlanetRotateAnimation',[
//     ...states,
//     ...transitions,
//     // state('halfcircle', style({
//     //     transform: `rotate(180deg)`
//     // })),
//     // state('fullcircle', style({
//     //     transform: `rotate(360deg)`
//     // })),
//     // state('twocircle', style({
//     //     transform: `rotate(720deg)`
//     // })),
//     // state('rest, void', style({
//     //     transform: `rotate(0deg)`
//     // })),
//     // transition('rest => fullcircle', [
//     //     animate(`${3000}ms`),
//     // ]),
//     // transition('rest => halfcircle', [
//     //     animate(`${1500}ms`),
//     // ]),
// ]);