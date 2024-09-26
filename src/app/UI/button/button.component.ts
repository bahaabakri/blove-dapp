import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  customClass = input<string>('')
  disabled = input<boolean>(false)
  type = input<string>('button')
  ariaLabel = input<string>('')
  title = input<string>('')
  background = input<string>('transparent')
  borderColor = input<string>('#333')
  // @Output() handleClickEvent = new EventEmitter()
  handleClickEvent = output<boolean>()

  handleOnClick() {
    this.handleClickEvent.emit(true)
  }
}
