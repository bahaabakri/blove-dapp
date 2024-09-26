import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TabBarComponent } from './layout/tab-bar/tab-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { filter, Subject, takeUntil } from 'rxjs';
import GlobalService from './services/global.service';
import { MainModalComponent } from './UI/main-modal/main-modal.component';
import { MainModalService } from './services/main-modal.service';
import { MainModalData } from './UI/main-modal/main-modal.model';
import { ModalComponent } from './UI/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TabBarComponent,
    HeaderComponent,
    MainModalComponent,
    ModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blove-dapp';
  isMainPage!: boolean;
  isMainModalOpen!: boolean;
  modalData!: MainModalData;
  private _unsubscribeAll = new Subject();
  constructor(
    private _router: Router,
    private _globalService: GlobalService,
    public mainModalService: MainModalService
  ) {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this._globalService.updateCurrentPage(this._router.url);
      });
    this._globalService.isMainPage$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((isMainPage) => (this.isMainPage = isMainPage));

    this.mainModalService.mainModalData$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((val: MainModalData | null) => {
        if (!val) {
          this.isMainModalOpen = false;
        } else {
          this.isMainModalOpen = true;
          this.modalData = val;
        }
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
