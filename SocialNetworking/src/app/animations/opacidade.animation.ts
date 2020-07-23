
import { trigger, state, style, animate, transition, } from '@angular/animations';

export const opacityAnimation = [
    trigger('animationLoad', [
        transition('void => *', [
            style({
                transform: 'translateX(10px)',
                opacity: 0
            }),
            animate('.5s .2s ease-out')
        ]),
        state('load',
            style({
                transform: 'translateX(0)',
                opacity: 1
            })),
    ]),
    trigger('animationOpacity', [
        transition('void => *', [
            style({
                opacity: 0
            }),
            animate('.5s .2s ease-out')
        ]),
        state('load',
            style({
                opacity: 1
            })),
    ]),

];
