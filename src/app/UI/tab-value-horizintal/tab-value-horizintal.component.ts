import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-value-horizintal',
  standalone: true,
  imports: [],
  templateUrl: './tab-value-horizintal.component.html',
  styleUrl: './tab-value-horizintal.component.scss'
})
export class TabValueHorizintalComponent {

  value = input.required()
  subtitle = input()
}
