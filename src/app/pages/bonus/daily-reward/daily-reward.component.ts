import { Component, signal, WritableSignal } from '@angular/core';
import { TopHeaderComponent } from '../../../UI/top-header/top-header.component';
import dailyRewardsData from './daily-reward-data';
import { DailyRewardData } from './daily-reward.model';
import { CommonModule } from '@angular/common';
import { BonusService } from '../bonus.service';
import { BonusComponent } from "../bonus.component";
import { ModalComponent } from '../../../UI/modal/modal.component';
import { DailyRewardModalComponent } from '../daily-reward-modal/daily-reward-modal.component';

@Component({
  selector: 'app-daily-reward',
  standalone: true,
  imports: [CommonModule, TopHeaderComponent, BonusComponent, ModalComponent, DailyRewardModalComponent],
  templateUrl: './daily-reward.component.html',
  styleUrl: './daily-reward.component.scss'
})
export class DailyRewardComponent {
  numOfDayOfDailyReward:number
  dailyRewardsData:DailyRewardData[]
  isOpen: WritableSignal<boolean> = signal(false)
  selectedDailyRewardVal:string | undefined
  constructor(private _bonusService:BonusService) {
    this.dailyRewardsData = dailyRewardsData
    this.numOfDayOfDailyReward = this._bonusService.numOfDayOfDailyReward
    this.selectedDailyRewardVal = dailyRewardsData.find((el,index) => index === this.numOfDayOfDailyReward - 1)?.value
  }

  handleCloseModal() {
    console.log('CLOSE MODAL');
    this.isOpen.set(false)
    
  }
  openModal(numOfDayOfDailyReward:number) {
    if (numOfDayOfDailyReward !== this.numOfDayOfDailyReward) {
      return
    }
    this.isOpen.set(true)
  }
}
