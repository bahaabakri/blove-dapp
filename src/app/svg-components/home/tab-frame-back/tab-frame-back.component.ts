import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-frame-back',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-frame-back.component.html',
  styleUrl: './tab-frame-back.component.scss'
})
export class TabFrameBackComponent {

  energyPercentage = input<number>(0);
  numberOfSectors = input<number>(8)
  totalEnergy = input<number>(0)
}
