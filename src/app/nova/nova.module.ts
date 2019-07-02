import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaRoutingModule } from './nova-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { NovaComponent } from './components/nova/nova.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [OverviewComponent, NovaComponent, NavigationComponent],
  imports: [
    CommonModule,
    NovaRoutingModule
  ]
})
export class NovaModule { }
