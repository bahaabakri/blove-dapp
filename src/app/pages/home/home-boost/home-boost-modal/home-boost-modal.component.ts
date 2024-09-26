import { Component, EventEmitter, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../UI/button/button.component';
import { TopHeaderComponent } from '../../../../UI/top-header/top-header.component';
import { TabValueVerticalComponent } from "../../../../UI/tab-value-vertical/tab-value-vertical.component";
import { TabValueHorizintalComponent } from '../../../../UI/tab-value-horizintal/tab-value-horizintal.component';

@Component({
  selector: 'app-home-boost-modal',
  standalone: true,
  imports: [ButtonComponent, TopHeaderComponent, TabValueVerticalComponent, TabValueVerticalComponent, TabValueHorizintalComponent],
  templateUrl: './home-boost-modal.component.html',
  styleUrl: './home-boost-modal.component.scss'
})
export class HomeBoostModalComponent {

  id = input.required<string>()
  imgSrc = input.required<string>()
  title = input.required<string>()
  subtitle = input.required<string>()
  subtitle2Val = input<string>()
  subtitle2 = input<string>()
  cost = input.required<string>()
  lvl = input<string>()

  redeemBoostOut = output<{
    id: string
  }>()

  onClickInsideDialog(e:Event) {
    if (e) {
      e.stopPropagation()
    }
  }

  redeemBoost() {
    this.redeemBoostOut.emit({
      id: this.id()
    })
  }
}
