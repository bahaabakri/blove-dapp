import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../UI/button/button.component';
import { TopHeaderComponent } from '../../../UI/top-header/top-header.component';

@Component({
  selector: 'app-bonus-modal',
  standalone: true,
  imports: [ButtonComponent, TopHeaderComponent],
  templateUrl: './bonus-modal.component.html',
  styleUrl: './bonus-modal.component.scss'
})
export class BonusModalComponent {
  id = input.required<string>()
  imgSrc = input.required<string>()
  title = input.required<string>()
  subtitle = input.required<string | undefined>()
  // subtitle2Val = input<string>()
  // subtitle2 = input<string>()
  cost = input.required<string | undefined>()
  lvl = input<string>()

  redeemTaskOut = output<{
    id: string
  }>()

  onClickInsideDialog(e:Event) {
    if (e) {
      e.stopPropagation()
    }
  }

  redeemTask() {
    this.redeemTaskOut.emit({
      id: this.id()
    })
  }
}
