import { Routes } from "@angular/router";
import { BecomeACeoComponent } from "./become-a-ceo/become-a-ceo.component";
import { ProfileComponent } from "./profile/profile.component";

export default [
    {
        path: 'become-a-ceo',
        component: BecomeACeoComponent,
        
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
] as Routes