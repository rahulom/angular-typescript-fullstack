import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/layout.component';
import { AuthFooterComponent } from './layout/footer/footer.component';
import { AuthHeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AppSharedModule } from '../app.shared.module';
import { CanAuthGuard } from '../services/can-auth-guard.service';

const authRoutes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        canActivate:[CanAuthGuard],
        children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(authRoutes),
        AppSharedModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AuthLayoutComponent,
        AuthFooterComponent,
        AuthHeaderComponent,
        LoginComponent,
        ForgotPasswordComponent,
    ],

})
export class AuthModule { }

