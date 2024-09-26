import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  id = input.required<string>()
  iconPath = input.required<string>()
  title = input.required<string>()
  subtitle = input.required<string | undefined>()
  logoPath = input<string | undefined>()
}
