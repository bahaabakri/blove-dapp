import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal.component';
import { Router, UrlTree } from '@angular/router';
import { MainModalService } from '../../services/main-modal.service';
import { TopHeaderComponent } from '../top-header/top-header.component';

@Component({
  selector: 'app-main-modal',
  standalone: true,
  imports: [ButtonComponent, ModalComponent, TopHeaderComponent],
  templateUrl: './main-modal.component.html',
  styleUrl: './main-modal.component.scss'
})
export class MainModalComponent {
  content = input<string>()
  imgSrc = input<string>()
  title = input<string>()
  subtitle = input<string>()
  buttonTitle = input<string>()
  buttonColor = input<string>()
  navigationRoute = input<string | UrlTree>()
  constructor(private _router:Router, private _mainModalService:MainModalService) {

  }
  onClickInsideDialog(e:Event) {
    if(e) {
      e.stopPropagation()
    }
  } 

  handleNavigation() {
    this._mainModalService.closeModal()
    if (this.navigationRoute()) {
      this._router.navigate([this.navigationRoute()])
    }
  }
}
