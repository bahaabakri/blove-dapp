import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-item-list-2',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './item-list-2.component.html',
  styleUrl: './item-list-2.component.scss'
})
export class ItemList2Component {
  iconPath = input.required<string>()
  actionType = input<'switch' | 'arrow'>()
  value= input<string>()
}
