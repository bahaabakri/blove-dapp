import { Directive, ElementRef, EventEmitter, HostListener, Input, output, Output, Renderer2 } from "@angular/core";

@Directive({
    standalone:true,
    selector: '[appDragDropTouch]'
  })
  export class DragDropTouchDirective {
    isDragging = false;
    // @Output() draggingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    // @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    draggingChange = output<boolean>();
    closeModal = output<boolean>()
    initialY!: number;
    scrollY!: number;
    constructor(private elementRef: ElementRef,
        private renderer: Renderer2) { }
  
    @HostListener('touchstart', ['$event']) onMousedown(event: TouchEvent) {
        event.preventDefault();
        this.startDragging(event)
    }
    
    @HostListener('touchmove', ['$event']) onMousemove(event:TouchEvent) {
        event.preventDefault();
        this.handleDragging(event)
    }
    @HostListener('touchend', ['$event']) onMouseup(event:TouchEvent) {
        event.preventDefault();
        this.stopDragging()
    }
    @HostListener('touchcancel', ['$event']) onMouseleave(event:TouchEvent) {
        event.preventDefault();
        this.onContainerMouseLeave()
    }
    startDragging(event: TouchEvent) {
        event.stopPropagation();
        this.isDragging = true
        this.initialY = event.touches[0].clientY;
        this.scrollY = this.elementRef.nativeElement.scrollTop;
    }
    
    handleDragging(event: TouchEvent) {
        if (!this.isDragging) {
            this.draggingChange.emit(false)
            return;
        } 
    
        this.draggingChange.emit(true)
        const deltaY = event.touches[0].clientY - this.initialY;
        console.log(deltaY);
        if (deltaY < 0) {
            return
        }
        this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `TranslateY(${deltaY}px)`)
        if (deltaY > 100) {
            this.closeModal.emit(true)
            setTimeout(() => {
                this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `TranslateY(0px)`)
            }, 100)
        }
    }
    
    stopDragging() {
        this.isDragging = false
    }
    
    onContainerMouseLeave() {
        if(this.isDragging) {
            this.stopDragging();
        }
    }
  }

