import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-bonus-icon',
  standalone: true,
  imports: [],
  templateUrl: './bonus-icon.component.html',
  styleUrl: './bonus-icon.component.scss'
})
export class BonusIconComponent {
  isActive = input.required<boolean>()
}
