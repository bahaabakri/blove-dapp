import { Component, effect, ElementRef, EventEmitter, input, Input, output, Output, Renderer2, ViewChild } from '@angular/core';
import {DragDropTouchDirective } from '../../directives/drag-drop-touch.directive';
import { slideInOutModalAnimation } from '../../animations/slide-in-out-modal-animation';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DragDropTouchDirective],
  animations: [slideInOutModalAnimation],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @ViewChild('dialog') dialog!:ElementRef<HTMLDialogElement>
  // @ViewChild('dialogContent') dialogContent!:ElementRef<HTMLDivElement>
  isOpen = input<boolean>(false)
  // @Output('handleOnClose') handleOnClose = new EventEmitter()
  handleOnClose = output<boolean>()
  actionDragging:boolean = false
  constructor(private _render: Renderer2) {
  }
  ngOnChanges() {
    if (!this.dialog) {
      return
    }
    if (this.isOpen()) {
      this.show()
    } else {
      this.close()
    }

  }
  show() {
    this.dialog.nativeElement.showModal()
  }
  close() {
    this.dialog.nativeElement.close()
    this.handleClose()
  }

  handleClose() {
    this.handleOnClose.emit(true)
  }
  onDraggingChange(status:boolean) {
    this.actionDragging = status  
    console.log(this.actionDragging);
    
  }
}
