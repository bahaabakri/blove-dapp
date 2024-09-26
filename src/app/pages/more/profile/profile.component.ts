import { Component } from '@angular/core';
import { ButtonComponent } from '../../../UI/button/button.component';
import { ProfileStatisticCardComponent } from "./profile-statistic-card/profile-statistic-card.component";
import { ProfileInvitesComponent } from './profile-invites/profile-invites.component';
import { ItemList2Component } from '../../../UI/item-list-2/item-list-2.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonComponent, ProfileStatisticCardComponent, ProfileInvitesComponent, ItemList2Component],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {


  onOpenEditProfile() {
    
  }
}
