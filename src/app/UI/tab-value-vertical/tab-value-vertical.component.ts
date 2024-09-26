import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-value-vertical',
  standalone: true,
  imports: [],
  templateUrl: './tab-value-vertical.component.html',
  styleUrl: './tab-value-vertical.component.scss'
})
export class TabValueVerticalComponent {

  value = input.required()
  lvl = input()
}
