import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    
    {
        path: '',
        loadChildren: 'app/menuComponents/menu.module#MenuModule'
    },
    
    {
        path: '',        
        redirectTo: '/menu',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);





