import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.routes')
    },
    {
        path: 'invest',
        loadChildren: () => import('./pages/invest/invest.routes')
    },
    {
        path: 'bonus',
        loadChildren: () => import('./pages/bonus/bonus.routes')
    },
    {
        path: 'more',
        loadChildren: () => import('./pages/more/more.routes')
    },
    {
        path: 'play',
        loadChildren: () => import('./pages/play/play.routes')
    },

];
