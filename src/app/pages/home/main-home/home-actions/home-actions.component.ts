import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../UI/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-actions',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-actions.component.html',
  styleUrl: './home-actions.component.scss'
})
export class HomeActionsComponent {

  constructor(private _router:Router) {}

  handleOnClick(e:any ) {
    this._router.navigate(['home', 'boost'])
  }
}
