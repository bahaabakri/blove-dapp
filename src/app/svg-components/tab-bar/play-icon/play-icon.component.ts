import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-play-icon',
  standalone: true,
  imports: [],
  templateUrl: './play-icon.component.html',
  styleUrl: './play-icon.component.scss'
})
export class PlayIconComponent {
  isActive = input.required<boolean>()
}
