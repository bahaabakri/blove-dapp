import { Component, NgZone } from '@angular/core';
import { TopHeaderComponent } from '../../UI/top-header/top-header.component';
import { BonusItem } from './bonus-modal';
import { bonusAdditionalItems, bonusPrimaryItems } from './bonus-data';
import { BonusItemComponent } from './bonus-item/bonus-item.component';
import { interval, Subject, takeUntil, takeWhile } from 'rxjs';
import GlobalService from '../../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BonusService } from './bonus.service';
import { CountDownDirective } from '../../directives/count-down.directive';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [TopHeaderComponent, BonusItemComponent, CommonModule, CountDownDirective],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.scss'
})
export class BonusComponent {

  bonusPrimaryItems:BonusItem[]
  bonusAdditionalItems:BonusItem[]
  numOfDayOfDailyReward:number
  constructor(
    private _router: Router,
    private _bonusService:BonusService) {
    this.numOfDayOfDailyReward = this._bonusService.numOfDayOfDailyReward
    this.bonusPrimaryItems = bonusPrimaryItems
    this.bonusAdditionalItems = bonusAdditionalItems
    
  }

  onOpenDailyReward() {
    this._router.navigate(['bonus', 'daily-reward'])
  }
}
