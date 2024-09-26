import { CommonModule } from '@angular/common';
import { Component, input, signal, WritableSignal } from '@angular/core';
import { ModalComponent } from '../../../../UI/modal/modal.component';
import { HomeBoostModalComponent } from "../home-boost-modal/home-boost-modal.component";
import { HomeTabService } from '../../../../services/home-tab.service';
import { Router } from '@angular/router';
import { MainModalService } from '../../../../services/main-modal.service';
import { ItemListComponent } from "../../../../UI/item-list/item-list.component";
@Component({
  selector: 'app-home-boost-item',
  standalone: true,
  imports: [CommonModule, ModalComponent, HomeBoostModalComponent, ItemListComponent],
  templateUrl: './home-boost-item.component.html',
  styleUrl: './home-boost-item.component.scss'
})
export class HomeBoostItemComponent {

  id = input.required<string>()
  iconPath = input.required<string>()
  title = input.required<string>()
  subtitle = input.required<string | undefined>()
  logoPath = input<string | undefined>()
  imgSrc = input.required<string>()
  subtitlePopup = input.required<string>()
  subtitle2Val = input<string>()
  subtitle2 = input<string>()
  cost = input.required<string>()
  lvl = input<string>()
  isOpen: WritableSignal<boolean> = signal(false)

  constructor(private _homeTabService:HomeTabService, private _router:Router, private _mainModalService:MainModalService) {

  }
  handleCloseModal() {
    console.log('CLOSE MODAL');
    this.isOpen.set(false)
    
  }
  openModal() {
    this.isOpen.set(true)
  }
  onRedeemBoost({id}: {id:string}) {
    if (!id) {
      return
    }
    if (id === 'full_energy') {
      this._homeTabService.refillEnergy()
      this.isOpen.set(false)
    }

    if (id === 'turbo') {
      this._homeTabService.turnOnTurbo(100)
      this.isOpen.set(false)
    }
    if (id === 'multi_tap') {
      this._homeTabService.applyMultiTap(100)
      this.isOpen.set(false)
    }
    if (id === 'energy_capacity') {
      this._homeTabService.extendEnergyCapacity(100)
      this.isOpen.set(false)
    }
  }
}
