import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  numOfDayOfDailyReward:number = 5
  constructor() { }
}
