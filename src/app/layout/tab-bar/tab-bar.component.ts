import { Component } from '@angular/core';
import { TabBarElementComponent } from './tab-bar-element/tab-bar-element.component';
import { HomeIconComponent } from '../../svg-components/tab-bar/home-icon/home-icon.component';
import { InvestIconComponent } from '../../svg-components/tab-bar/invest-icon/invest-icon.component';
import { BonusIconComponent } from '../../svg-components/tab-bar/bonus-icon/bonus-icon.component';
import { MoreIconComponent } from '../../svg-components/tab-bar/more-icon/more-icon.component';
import { PlayIconComponent } from '../../svg-components/tab-bar/play-icon/play-icon.component';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import GlobalService from '../../services/global.service';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [
    TabBarElementComponent,
    HomeIconComponent,
    InvestIconComponent,
    BonusIconComponent,
    MoreIconComponent,
    PlayIconComponent,
    RouterModule
  ],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {
  page:string = ''
  private _unsubscribeAll = new Subject()
  constructor(private _globalService:GlobalService) {
    this._globalService.currentPage$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(currentPage => this.page = currentPage)
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null)
    this._unsubscribeAll.complete()
  }

}
