import { Component } from '@angular/core';
import { StatisticsComponent } from '../../../UI/statistics/statistics.component';
import { CommonModule } from '@angular/common';
import { HomeTabService } from '../../../services/home-tab.service';

@Component({
  selector: 'app-invest-statistics',
  standalone: true,
  imports: [StatisticsComponent, CommonModule],
  templateUrl: './invest-statistics.component.html',
  styleUrl: './invest-statistics.component.scss'
})
export class InvestStatisticsComponent {
  constructor(public _homeTabService:HomeTabService) {

  }
}
