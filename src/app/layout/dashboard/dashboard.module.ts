import { SharedModule } from './../../shared/shared.module';
import { AngularmaterialmoduleModule } from './../../angularmaterialmodule/angularmaterialmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularmaterialmoduleModule,
    SharedModule
  ]
})
export class DashboardModule { }
