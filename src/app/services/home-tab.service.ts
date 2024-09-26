import { computed, Injectable, NgZone, signal, Signal, WritableSignal } from '@angular/core';
import { MainModalService } from './main-modal.service';
import { BehaviorSubject, EMPTY, interval, switchMap, takeUntil, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeTabService {
  private worker!: Worker;
  numOfSectors:number
  totalEnergy:number
  energyEdge:number
  tabValueEdge:number
  private turboDurationMilliSecond:number
  private numOfPulse:number
  isTurboOn:boolean = false
  isMultiTapOn:boolean = false
  isEnergyCapExtant:boolean = false
  currentEnergy: WritableSignal<number>;
  energyPercentage: Signal<number>
  sectionsEnergyPercentage:Signal<number[]>
  tabValue: WritableSignal<number>
  // isIntervalPlay = new BehaviorSubject<boolean>(true);
  constructor(
    private _mainModalService:MainModalService,
    private ngZone: NgZone,

  ) {
    this.energyEdge = 3
    this.tabValueEdge = 3
    this.totalEnergy = 80
    this.numOfSectors = 8
    this.numOfPulse = 100
    this.turboDurationMilliSecond = 10 * 60 * 1000
    this.currentEnergy = signal(0);
    this.tabValue = signal(0)
    this.energyPercentage = computed(() => (this.currentEnergy() * 100) / this.totalEnergy)
    this.sectionsEnergyPercentage = computed(() => this.getSectionEnergies())
    this.updateEnergy()
  } 

  /**
   * To get the energy percentage for each section
   * @returns 
   */
  private getSectionEnergies(): number[] {
    const maxEnergyPerSector = this.totalEnergy / this.numOfSectors;
    const sectionEnergies: number[] = [];
  
    for (let i = 0; i < this.numOfSectors; i++) {
      if (this.currentEnergy() < maxEnergyPerSector * (i+1) && this.currentEnergy() >= maxEnergyPerSector * (i)) {
        const percentage = ((this.currentEnergy() % maxEnergyPerSector) * 100) / maxEnergyPerSector;
        sectionEnergies.push(percentage);
      
      } else if (this.currentEnergy() >= maxEnergyPerSector * (i)) {
        sectionEnergies.push(100); // Full energy
      } else  {
        sectionEnergies.push(0);
      }
    }
    // console.log(sectionEnergies);
    
    return sectionEnergies;
  }

  /**
   * To update the energy
   */
  private updateEnergy() {
    // Do not run interval inside angular zone => 
    // this happened to avoid change detection tracking which make the app slow with interval 
    if (typeof Worker !== 'undefined') {

      // use web worker to run interval in background
      this.worker = new Worker(new URL('../web-worker/interval.worker.ts', import.meta.url));
      // send interval num of pulse
      this.worker.postMessage(this.numOfPulse);
      this.ngZone.runOutsideAngular(() => {

        // listen to interval from web worker
        this.worker.onmessage = ({data}) => {
          if (data === 'tick') {
            this.ngZone.run(() => {
              if (this.energyPercentage() < 100) {
                  this.currentEnergy.update(prevEnergy => prevEnergy + (this.energyEdge / 10))
              } else {
                this.currentEnergy.set(this.totalEnergy)
              }
            });
          }
        }
      });
    }

  }


  /**
   * to refill the energy  
   */
  refillEnergy() {
    this.currentEnergy.set(this.totalEnergy)
    // open success modal
    this.showSuccessModal(`You've refilled the energy, Enjoy full energy`)
  }

  /**
   * To turn on the turbo
   * @param cost 
   * @returns 
   */
  turnOnTurbo(cost:number) {
    if (this.isTurboOn) {
      return;
    }
    if (this.checkIfHasSufficientTabValue(cost)) {
      this.isTurboOn = true
      this.energyEdge = this.energyEdge * 2
      // open success modal
      this.showSuccessModal('Turbo is on, enjoy refilling energy 2x times faster for next 10 minutes.')
      setTimeout(() => {
        this.isTurboOn = false
        this.energyEdge = this.energyEdge / 2
      }, this.turboDurationMilliSecond)
    } else {
      // show insufficient tab value
      this.showFailModal()
    }
  }

  /**
   * apply multi tab
   */

  applyMultiTap(cost:number) {
    if (this.isMultiTapOn) {
      return;
    }
    if (this.checkIfHasSufficientTabValue(cost)) {
      this.isMultiTapOn = true
      this.tabValueEdge = this.tabValueEdge + 1
      // open success modal
      this.showSuccessModal('Enjoy adding one tab value extra for each click')
    } else {
      // show insufficient tab value
      this.showFailModal()
    }
  }

  /**
   * extend energy capacity
   * @param cost 
   * @returns 
   */
  extendEnergyCapacity(cost:number) {
    if (this.isEnergyCapExtant) {
      return;
    }
    if (this.checkIfHasSufficientTabValue(cost)) {
      this.isEnergyCapExtant = true
      this.totalEnergy = this.totalEnergy + 500
      // open success modal
      this.showSuccessModal(`Enjoy +500 extended energy`)
    } else {
      // show insufficient tab value
      this.showFailModal()
    }
  }

  /**
   * Check if user has enough tab value to redeem the boost 
   * @param cost 
   * @returns 
   */
  checkIfHasSufficientTabValue(cost:number): boolean {
    // check if user has enough tabValue
    if (cost > this.tabValue()) {
      return false
    }
    return true
  }

  /**
   * show success modal 
   */
  showSuccessModal(message:string) {
    this._mainModalService.openModal(
      {
        imgSrc: 'assets/home/success-heart.png',
        title: 'Done',
        subtitle: message,
        buttonTitle: 'Return To Home',
        navigationRoute: 'home'
      }
    )
  }

  /**
   * show fail modal
   */

  showFailModal() {
    this._mainModalService.openModal(
      {
        imgSrc: 'assets/home/faild-heart.png',
        title: 'Oops',
        subtitle: `Insufficient tab value`,
        buttonTitle: 'Close',
        buttonColor: '#333'
      }

    )
  }
  /**
   * Vibrate 
   * @param duration 
   */
  vibrate(duration: number) {
    if ('vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  }
}
