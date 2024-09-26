import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-tab-bar-element',
  standalone: true,
  imports: [],
  templateUrl: './tab-bar-element.component.html',
  styleUrl: './tab-bar-element.component.scss'
})
export class TabBarElementComponent {
  label = input<string>()
}
