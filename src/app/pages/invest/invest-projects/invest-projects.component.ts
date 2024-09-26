import { Component } from '@angular/core';
import investBanner from '../invest-banner/invest-banner-data';
import { InvestBannerComponent } from '../invest-banner/invest-banner.component';
import { CommonModule } from '@angular/common';
import { InvestCardComponent } from "../invest-card/invest-card.component";
import { SlideRightLeftDirective } from '../../../directives/slide-right-left.directive';
import GlobalService from '../../../services/global.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestTab } from '../invest-tabs/invest-tabs-modal';
import investTabs from '../invest-tabs/invest-tabs-data';
import { slideInOutTabAnimation } from '../../../animations/slide-in-out-tab-animation';

@Component({
  selector: 'app-invest-projects',
  standalone: true,
  imports: [InvestBannerComponent, CommonModule, InvestCardComponent, SlideRightLeftDirective],
  animations: [slideInOutTabAnimation],
  templateUrl: './invest-projects.component.html',
  styleUrl: './invest-projects.component.scss'
})
export class InvestProjectsComponent {

  private _unsubscribeAll= new Subject()
  investTabs:InvestTab[]
  currentTabIndex!:number
  animationState: string = 'initial'
  constructor(private _globalService:GlobalService, private _router:Router, private _activatedRoute:ActivatedRoute) {
    this.investTabs = investTabs
    this._globalService.currentPage$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(page => {
      // change from initial => noSlide after 300 ms
      setTimeout(() => {
        this.animationState = 'noSlide'  // Reset after animation completes
      }, 300);  // Match this with your animation duration (100ms)
      console.log(this.animationState);
      const tabPage = page.split('/').slice(-1)[0]
      this.currentTabIndex = investTabs.findIndex(el => el.id === tabPage)
    })
  }

  onSlideRight() {
    if (this.currentTabIndex > this.investTabs.length - 2) {
      return
    }
    // change from noSlide => slideRight after 100ms change from slideRight => initial
    this.animationState = 'slideRight'
    setTimeout(() => {
      this.animationState = 'initial';  // Reset after animation completes
    }, 100);  // Match this with your animation duration (100ms)
    const nextTap = investTabs[this.currentTabIndex + 1].id
    this.handleNavigation(nextTap)
  }

  onSlideLeft() {
    if (this.currentTabIndex < 1) {
      return
    }
    // change from noSlide => slideLeft after 100ms change from slideRight => initial
    this.animationState = 'slideLeft'
    setTimeout(() => {
      this.animationState = 'initial';  // Reset after animation completes
    }, 100);  // Match this with your animation duration (100ms)
    const prevTap = investTabs[this.currentTabIndex - 1].id
    this.handleNavigation(prevTap)
  }
  handleNavigation(navigationTap:string) {
    this._router.navigate(['invest', navigationTap])
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null)
    this._unsubscribeAll.complete()
  }
}
