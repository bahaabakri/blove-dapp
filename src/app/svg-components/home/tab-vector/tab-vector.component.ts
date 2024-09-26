import { Component, effect, input } from '@angular/core';
import { energyAnimation } from '../../../animations/energy-animation';

@Component({
  selector: 'app-tab-vector',
  standalone: true,
  imports: [],
  animations: [energyAnimation],
  templateUrl: './tab-vector.component.html',
  styleUrl: './tab-vector.component.scss'
})
export class TabVectorComponent {
  energyPercentage = input<number>(0);
  color = input<string>('#242424');
  svgWidth = input.required<string>()
  svgHeight = input.required<string>()
  svgViewBox = input.required<string>()
  svgD = input.required<string>()
  svgGradientId = input.required<string>()
  svgGradientX1 = input.required<string>()
  svgGradientX2 = input.required<string>()
  svgGradientY1 = input.required<string>()
  svgGradientY2 = input.required<string>()
  animationState = 'hide'


  constructor() {
    effect(() => {
      if (this.energyPercentage() == 100) {
        this.animationState = 'show'
      }
      if (this.energyPercentage() < 100) {
        this.animationState = 'hide'
      }
    })
  }
}
