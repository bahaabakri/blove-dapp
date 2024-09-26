import { Directive, ElementRef, EventEmitter, HostListener, output, Output } from '@angular/core';
import { log } from 'console';

@Directive({
  selector: '[appSlideRightLeft]',
  standalone: true
})
export class SlideRightLeftDirective {

  constructor(private _elementRef: ElementRef) { }
  initialX!: number;
  finalX!:number
  // @Output() handleSlideRight: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output() handleSlideLeft: EventEmitter<boolean> = new EventEmitter<boolean>();
  handleSlideRight = output<boolean>()
  handleSlideLeft = output<boolean>()
  @HostListener('touchstart', ['$event']) onMousedown(event: TouchEvent) {
    console.log('touch start');
    // console.log(event.touches[0].clientX)
    this.initialX = event.touches[0].clientX
    
}

@HostListener('touchmove', ['$event']) onTouchMove(event:TouchEvent) {
  // console.log(event.touches[0].clientX)
}
@HostListener('touchend', ['$event']) onTouchup(event:TouchEvent) {
  console.log('touchend')
  this.finalX = event.changedTouches[0].clientX
  if (this.finalX - this.initialX <= -50) {
    // slide right
    // console.log('right');
    this.handleSlideRight.emit(true)
    
  }
  if (this.finalX - this.initialX > 50) {
    // slide left
    this.handleSlideLeft.emit(true)
  }
}

}
