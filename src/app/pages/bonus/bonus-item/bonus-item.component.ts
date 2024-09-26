import { Component, input, signal, WritableSignal } from '@angular/core';
import { ItemListComponent } from '../../../UI/item-list/item-list.component';
import { BonusModalComponent } from '../bonus-modal/bonus-modal.component';
import { ModalComponent } from '../../../UI/modal/modal.component';

@Component({
  selector: 'app-bonus-item',
  standalone: true,
  imports: [ItemListComponent, BonusModalComponent, ModalComponent],
  templateUrl: './bonus-item.component.html',
  styleUrl: './bonus-item.component.scss'
})
export class BonusItemComponent {
  id = input.required<string>()
  iconPath = input.required<string>()
  title = input.required<string>()
  subtitle = input.required<string | undefined>()
  logoPath = input<string | undefined>()
  // subtitlePopup = input.required<string>()
  // subtitle2Val = input<string>()
  // subtitle2 = input<string>()
  // cost = input.required<string>()
  // lvl = input<string>()
  isOpen: WritableSignal<boolean> = signal(false)

  handleCloseModal() {
    console.log('CLOSE MODAL');
    this.isOpen.set(false)
    
  }
  openModal() {
    this.isOpen.set(true)
  }

  onRedeemTask() {

  }
}
