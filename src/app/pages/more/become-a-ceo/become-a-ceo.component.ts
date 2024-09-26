import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../../UI/top-header/top-header.component";
import { BecomeACeoBanner } from './become-a-ceo.modal';
import becomeACeoBanners from './become-a-ceo-data';
import { BannerComponent } from '../../../UI/banner/banner.component';
import { ButtonComponent } from '../../../UI/button/button.component';
import { MainModalService } from '../../../services/main-modal.service';

@Component({
  selector: 'app-become-a-ceo',
  standalone: true,
  imports: [TopHeaderComponent, BannerComponent, ButtonComponent],
  templateUrl: './become-a-ceo.component.html',
  styleUrl: './become-a-ceo.component.scss'
})
export class BecomeACeoComponent {

  becomeACeoBanners:BecomeACeoBanner[]
  constructor(private _mainModalService:MainModalService) {
    this.becomeACeoBanners = becomeACeoBanners
  }

  saveProject() {
    this._mainModalService.openModal({
      imgSrc:'assets/become-a-ceo/ceo-img.png' ,
      title: 'Congratulations',
      subtitle: 'You are now the CEO of GOAT Ai.',
      buttonTitle: 'Done'
    })
  }
}
