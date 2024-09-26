import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-invites',
  standalone: true,
  imports: [],
  templateUrl: './profile-invites.component.html',
  styleUrl: './profile-invites.component.scss'
})
export class ProfileInvitesComponent {
  numOfInvites = input('0')
  totalReferralInvited = input('0')
  totalReferralPoints = input('0')
}
