import { trigger, transition, style, animate } from "@angular/animations";

 export const slideInOutModalAnimation =   trigger('slideInOutModal', [
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('300ms ease-in', style({ transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'translateY(100%)' }))
    ])
  ])