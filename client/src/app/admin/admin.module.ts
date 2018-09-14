import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminControlSidebarComponent } from './admin-layout/admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-layout/admin-footer/admin-footer.component';
import { AdminLeftSideComponent } from './admin-layout/admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminComponent } from './admin-layout/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app.shared.module';
import { AuthGuard } from '../services/auth-guard.service';



let childernRoutes: Routes = [
  { path: '', redirectTo: '/dash-board', pathMatch: 'full' },
  { path: 'dash-board', component: AdminDashboardComponent }
];


const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: childernRoutes
  }

];

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent,
  ],
  exports: [AdminComponent]
})

export class AdminModule { }

