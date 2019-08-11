import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaRoutingModule } from './nova-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { NovaComponent } from './components/nova/nova.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { NovaService } from './services/nova.service';

@NgModule({
  declarations: [OverviewComponent, NovaComponent, NavigationComponent, CreatePlayerComponent],
  imports: [
    CommonModule,
    NovaRoutingModule
  ],
  providers: [
    NovaService
  ]
})
export class NovaModule { }
