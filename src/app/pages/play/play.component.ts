import { Component, input, NgZone, output } from '@angular/core';
import { TopHeaderComponent } from '../../UI/top-header/top-header.component';
import { interval, Subject, takeUntil, takeWhile } from 'rxjs';
import GlobalService from '../../services/global.service';
import { CountDownDirective } from '../../directives/count-down.directive';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [TopHeaderComponent, CountDownDirective],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {


  constructor(private _router:Router, private _activatedRoute:ActivatedRoute) {

  }
  openTriviaGame() {
    this._router.navigate(['trivia'], {relativeTo: this._activatedRoute})
  }
  openGuessWordGame() {
    this._router.navigate(['word-guess'], {relativeTo: this._activatedRoute})
  }
}
