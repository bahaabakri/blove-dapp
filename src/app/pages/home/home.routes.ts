import { Routes } from "@angular/router";
import { HomeBoostComponent } from "./home-boost/home-boost.component";
import { HomeComponent } from "./main-home/home.component";

export default [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'boost',
        component: HomeBoostComponent
    }
] as Routes