import { trigger, transition, style, animate, state } from "@angular/animations";

 export const slideInOutTabAnimation =   trigger('slideInOutTab', [
    state('initial', style({
        opacity: 0,
        transform: 'translateX(0)'
    })),
    state('noSlide', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    state('slideRight', style({
        opacity: .5,
        transform: 'translateX(-100%)'
    })),
    state('slideLeft', style({
        opacity: .5,
        transform: 'translateX(+100%)'
    })),
    transition('noSlide => slideRight, noSlide => slideLeft, noSlide <=> initial' , [
    animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ])
  ])

