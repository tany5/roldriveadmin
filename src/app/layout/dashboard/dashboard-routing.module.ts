import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'profile', canLoad: [AuthGuard], loadChildren: () => import('../../adminprofile/adminprofile.module').then(m => m.AdminprofileModule) },
      { path: 'booking', canLoad: [AuthGuard], loadChildren: () => import('../../booking/booking.module').then(m => m.BookingModule) },
      { path: 'clients', canLoad: [AuthGuard], loadChildren: () => import('../../clientmanagement/clientmanagement.module').then(m => m.ClientmanagementModule) },
      { path: 'suppliers', canLoad: [AuthGuard], loadChildren: () => import('../../suppliermanagement/suppliermanagement.module').then(m => m.SuppliermanagementModule) },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
