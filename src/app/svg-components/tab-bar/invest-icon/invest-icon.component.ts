import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-invest-icon',
  standalone: true,
  imports: [],
  templateUrl: './invest-icon.component.html',
  styleUrl: './invest-icon.component.scss'
})
export class InvestIconComponent {
  isActive = input.required<boolean>()
}
