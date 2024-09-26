import { Component } from '@angular/core';
import { InvestTabsComponent } from './invest-tabs/invest-tabs.component';
import { InvestStatisticsComponent } from './invest-statistics/invest-statistics.component';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [InvestTabsComponent, InvestStatisticsComponent],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.scss'
})
export class InvestComponent {

}
