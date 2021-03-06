﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AdminHomeComponent } from './admin_home/index';
import { UserHomeComponent } from './user_home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'admin-home', component: AdminHomeComponent },
    { path: 'user-home', component: UserHomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);