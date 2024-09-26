import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import investBanner from './invest-banner-data';
import { InvestBanner } from './invest-banner.modal';
import { BannerComponent } from '../../../UI/banner/banner.component';

@Component({
  selector: 'app-invest-banner',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './invest-banner.component.html',
  styleUrl: './invest-banner.component.scss'
})
export class InvestBannerComponent {
  investBanner:InvestBanner
  constructor() {
    this.investBanner = investBanner
  }
}