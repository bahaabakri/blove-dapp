import { Component, input } from '@angular/core';
import investCard from './invest-card-data';
import { InvestCard } from './invest-card.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invest-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invest-card.component.html',
  styleUrl: './invest-card.component.scss'
})
export class InvestCardComponent {
  investCard:InvestCard
  isLock = input<boolean>()
  constructor () {
    this.investCard = investCard
  }

}
