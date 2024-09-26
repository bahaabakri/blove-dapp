import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { ButtonComponent } from '../../../UI/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-actions',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './games-actions.component.html',
  styleUrl: './games-actions.component.scss'
})
export class GamesActionsComponent {

  submitAnswer = output<boolean>()
  constructor(
    private _router:Router
  ){

  }
  navigateToPlayPage() {
    this._router.navigate(['play'])
  }
  onSubmitAnswer() {
    this.submitAnswer.emit(true)
  }
}
