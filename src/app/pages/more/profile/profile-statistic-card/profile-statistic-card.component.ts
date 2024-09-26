import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-statistic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-statistic-card.component.html',
  styleUrl: './profile-statistic-card.component.scss'
})
export class ProfileStatisticCardComponent {

  icon = input.required()
  badgeVal = input.required()
  title = input.required()
  background = input('transparent')
  isDisabled = input(false)
}
