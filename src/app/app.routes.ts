import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guard/auth.guard';
import { roleGuard } from './guard/role.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent, canActivate: [authGuard]
    },
    {
        path: 'admin',
        component: AdminComponent, canActivate: [authGuard, roleGuard],
        data: { role: 'admin' }
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];
