import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeStatisticsComponent } from "./home-statistics/home-statistics.component";
import { HomeTabComponent } from './home-tab/home-tab.component';
import { HomeActionsComponent } from "./home-actions/home-actions.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeStatisticsComponent, HomeTabComponent, HomeActionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
