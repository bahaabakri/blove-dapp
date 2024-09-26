import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeBoostItemComponent } from "./home-boost-item/home-boost-item.component";
import { ModalComponent } from "../../../UI/modal/modal.component";
import { HomeBoostItem } from './home-boost.model';
import homeBoostItems from './home-boost-data';
import { TopHeaderComponent } from "../../../UI/top-header/top-header.component";
@Component({
  selector: 'app-home-boost',
  standalone: true,
  imports: [CommonModule, HomeBoostItemComponent, ModalComponent, TopHeaderComponent],
  templateUrl: './home-boost.component.html',
  styleUrl: './home-boost.component.scss'
})
export class HomeBoostComponent {
  homeBoostItems:HomeBoostItem[]
  constructor() {
    this.homeBoostItems = homeBoostItems
  }
}
