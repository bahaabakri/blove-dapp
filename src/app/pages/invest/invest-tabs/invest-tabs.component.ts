import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import investTabs from './invest-tabs-data';
import { InvestTab } from './invest-tabs-modal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-invest-tabs',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './invest-tabs.component.html',
  styleUrl: './invest-tabs.component.scss'
})
export class InvestTabsComponent {
  investTabs:InvestTab[]
  activeLink:InvestTab
  constructor() {
    this.investTabs = investTabs
    this.activeLink = this.investTabs[0];
  }
}
