import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  standalone: true,
  imports: [],
  templateUrl: './home-icon.component.html',
  styleUrl: './home-icon.component.scss'
})
export class HomeIconComponent {
  isActive = input.required<boolean>()
}