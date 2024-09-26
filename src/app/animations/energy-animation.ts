import { trigger, state, style, transition, animate } from "@angular/animations";

export const energyAnimation =  trigger('animationEnergy', [
    state('show', style({
      opacity: 1,
    })),
    state('hide', style({
        opacity: 0.5,
      })),
    transition('hide <=> show', [
      animate('1s ease-in'),
    ]),
  ])