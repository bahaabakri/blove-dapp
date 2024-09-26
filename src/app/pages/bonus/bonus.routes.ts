import {Routes } from "@angular/router";
import { BonusComponent } from "./bonus.component";
import { DailyRewardComponent } from "./daily-reward/daily-reward.component";

export default [
    {
        path: '',
        component: BonusComponent,
    },
    {
        path: 'daily-reward',
        component: DailyRewardComponent
    }
] as Routes