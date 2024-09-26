import { trigger, transition, animate, keyframes, style } from "@angular/animations";

export const countAnimation = [
    trigger('countChanged', [
      transition('* => *', [
        animate(
          '0.05s ease-in-out',
          keyframes([
            style({ transform: 'scale(1.5)', offset: 0.5 }),
            style({ transform: 'scale(1)', offset: 1 })
          ])
        )
      ])
    ])
  ]