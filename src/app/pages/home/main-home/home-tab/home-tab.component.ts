import { Component, computed, effect, ElementRef, Host, HostListener, NgZone, Renderer2, Signal, signal, ViewChild, WritableSignal } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { TabVectorComponent } from "../../../../svg-components/home/tab-vector/tab-vector.component";
import { TabFrameBackComponent } from '../../../../svg-components/home/tab-frame-back/tab-frame-back.component';
import { HomeTabService } from '../../../../services/home-tab.service';
import { countAnimation } from '../../../../animations/count-animation';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-tab',
  standalone: true,
  imports: [
    CommonModule,
    TabVectorComponent,
    TabFrameBackComponent,
  ],
  animations:[countAnimation],
  templateUrl: './home-tab.component.html',
  styleUrl: './home-tab.component.scss',
})
export class HomeTabComponent {
  @ViewChild('homeTab', { static: false }) homeTab!: ElementRef;
  // totalEnergy:number
  // numOfSectors:number
  // energyEdge:number
  // tabValueEdge:number
  // currentEnergy: WritableSignal<number>;
  // energyPercentage: Signal<number>
  // sectionsEnergyPercentage:Signal<number[]>
  // tabValue: WritableSignal<number>
  private _unsubscribeAll:Subject<any> = new Subject()
  // isAllowedToIncreaseEnergy:boolean = true
  // numOfPulsesAfterTab:number = 0
  constructor(
    private ngZone: NgZone, private renderer:Renderer2,
    public _homeTabService:HomeTabService) {
    // this.totalEnergy = this._homeTabService.totalEnergy
    // this.numOfSectors = this._homeTabService.numOfSectors
    // this.energyEdge = this._homeTabService
    // this.tabValueEdge = 3
    // this.currentEnergy = signal(0);
    // this.tabValue = signal(0)
    // this.energyPercentage = computed(() => (this.currentEnergy() * 100) / this.totalEnergy)
    // this.sectionsEnergyPercentage = computed(() => this.getSectionEnergies())
  }

  @HostListener('pointerdown', ['$event'])
  onTab(event: PointerEvent) {
    // console.log(event);
    this.handleUpdateEnergy(event)
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    event.preventDefault()
  }

  ngOnInit() {

  }
  showLoveReaction(event:PointerEvent) {
    // console.log(this.homeTab.nativeElement.getBoundingClientRect().top+ event.offsetY);
    const homeTabCoords = this.homeTab.nativeElement.getBoundingClientRect()
    const heartElement = this.renderer.createElement('div')
    this.renderer.addClass(heartElement, 'heart-reaction')
    this.renderer.setStyle(heartElement, 'left', (+event.clientX - homeTabCoords.left - 12.5)  + 'px')
    this.renderer.setStyle(heartElement, 'top', (+event.clientY - homeTabCoords.top - 12.5) + 'px')
    const heartImage = this.renderer.createElement('img')
    this.renderer.setAttribute(heartImage, 'src', 'assets/home/heart-reaction.png')
    const heartBadge = this.renderer.createElement('div')
    this.renderer.addClass(heartBadge, 'badge')
    heartBadge.textContent = `+${this._homeTabService.tabValueEdge}`
    this.renderer.appendChild(heartElement, heartImage)
    this.renderer.appendChild(heartElement, heartBadge)
    this.renderer.appendChild(this.homeTab.nativeElement, heartElement)
    setTimeout(() => {
      this.renderer.removeChild(document.getElementById('home-tab'), heartElement)
    }, 3000)
  }
  handleUpdateEnergy(event:PointerEvent) {
    // console.log(this._homeTabService.energyPercentage());
    
    if (!(this._homeTabService.energyPercentage() > 0 && this._homeTabService.energyPercentage() <= 100)) {
      return
    }
    this.showLoveReaction(event)
    this._homeTabService.vibrate(100);
    this._homeTabService.currentEnergy.update(prevEnergy => prevEnergy - (this._homeTabService.energyEdge/10))
    this._homeTabService.tabValue.update(prevTabValue => prevTabValue + (this._homeTabService.tabValueEdge))
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null)
    this._unsubscribeAll.complete()
  }
}
