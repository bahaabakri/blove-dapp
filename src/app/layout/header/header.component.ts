import { Component } from '@angular/core';
import { ButtonComponent } from '../../UI/button/button.component';
import { Subject, takeUntil } from 'rxjs';
import GlobalService from '../../services/global.service';
import { CommonModule, Location } from '@angular/common';
import { MakeItTitlePipe } from '../../pipes/make-it-title.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MakeItTitlePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _unsubscribeAll = new Subject()
  isMainPage!:boolean
  pageTitle!:string
  constructor(
    private _globalService:GlobalService,
    private location: Location,
    private _router: Router) {
    this._globalService.isMainPage$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(isMainPage => this.isMainPage = isMainPage)

    this._globalService.pageTitle$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(pageTitle => this.pageTitle = pageTitle)
  }

  onGoBack() {
    this.location.back();
  }
  navigateToCEOPage() {
    this._router.navigate(['more', 'become-a-ceo'])
  }
  navigateToProfilePage() {
    this._router.navigate(['more', 'profile'])
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null)
    this._unsubscribeAll.complete()
  }
}
