import {
  Directive,
  ElementRef,
  input,
  NgZone,
  Renderer2,
} from '@angular/core';
import { Subject, interval, takeWhile, takeUntil } from 'rxjs';
import GlobalService from '../services/global.service';

@Directive({
  selector: '[appCountDown]',
  standalone: true,
})
export class CountDownDirective {
  timeToStartFromBE = input.required<string>({
    alias: 'appCountDown'
  });
  timeToStartDate!: Date;
  timeDifference!: number;
  private _unsubscribeAll: Subject<any> = new Subject();
  constructor(
    private ngZone: NgZone,
    private _globalService: GlobalService,
    private _element: ElementRef,
    private _render: Renderer2
  ) {
  }
  ngOnInit() {
    if (this.timeToStartFromBE()) {
      this.timeToStartDate = new Date(this.timeToStartFromBE());
      this.startCountdown();
    }
  }

  startCountdown() {
    this.ngZone.runOutsideAngular(() => {
      interval(1000)
        .pipe(
          takeWhile(() => this.timeDifference > 0 || !this.timeDifference),
          takeUntil(this._unsubscribeAll)
        )
        .subscribe((val) => {
          this.ngZone.run(() => {
            const now = new Date();
            this.timeDifference = Math.floor(
              (this.timeToStartDate.getTime() - now.getTime()) / 1000
            ); // Time difference in second
            if (this.timeDifference < 0) {
              this.timeDifference = 0;
            }
            this._render.setProperty(
                this._element.nativeElement,
               'textContent', this._globalService.formatTime(this.timeDifference));
          });
        });
    });
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
