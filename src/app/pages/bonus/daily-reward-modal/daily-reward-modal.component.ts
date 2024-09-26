import { Component, input, output, signal, WritableSignal } from '@angular/core';
import { TopHeaderComponent } from '../../../UI/top-header/top-header.component';
import { ButtonComponent } from '../../../UI/button/button.component';

@Component({
  selector: 'app-daily-reward-modal',
  standalone: true,
  imports: [TopHeaderComponent, ButtonComponent],
  templateUrl: './daily-reward-modal.component.html',
  styleUrl: './daily-reward-modal.component.scss'
})
export class DailyRewardModalComponent {
  imgSrc = input.required<string>()
  title = input.required<string>()
  subtitle = input.required<string>()
  cost = input.required<string>()
  onCollectDailyRewardOut = output<boolean>()
  onClickInsideDialog(e:Event) {
    if (e) {
      e.stopPropagation()
    }
  }

  onCollectDailyReward() {
    this.onCollectDailyRewardOut.emit(true)
  }
}
