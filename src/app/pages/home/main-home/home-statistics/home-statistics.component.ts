import { Component } from '@angular/core';
import { HomeTabService } from '../../../../services/home-tab.service';
import { CommonModule } from '@angular/common';
import { countAnimation } from '../../../../animations/count-animation';
import { StatisticsComponent } from '../../../../UI/statistics/statistics.component';

@Component({
  selector: 'app-home-statistics',
  standalone: true,
  imports: [CommonModule, StatisticsComponent],
  animations:[countAnimation],
  templateUrl: './home-statistics.component.html',
  styleUrl: './home-statistics.component.scss'
})
export class HomeStatisticsComponent {
constructor(public _homeTabService:HomeTabService) {

}
}
