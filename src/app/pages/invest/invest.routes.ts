import { Routes } from "@angular/router";
import { InvestProjectsComponent } from "./invest-projects/invest-projects.component";
import { InvestComponent } from "./invest.component";
import investTabs from './invest-tabs/invest-tabs-data'
export default [
    {
        path: '',
        component: InvestComponent,
        children: [
            {
                path: '',
                redirectTo: `${investTabs[0].id}`,
                pathMatch: 'full'
            },
            {
                path: ':project',
                component: InvestProjectsComponent
            }
        ]
    },

] as Routes