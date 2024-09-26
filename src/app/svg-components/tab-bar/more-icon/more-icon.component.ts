import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-more-icon',
  standalone: true,
  imports: [],
  templateUrl: './more-icon.component.html',
  styleUrl: './more-icon.component.scss'
})
export class MoreIconComponent {
  isActive = input.required<boolean>()
}
