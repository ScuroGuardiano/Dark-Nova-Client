import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { NovaComponent } from './components/nova/nova.component';
import { NovaGuard } from './nova.guard';

const routes: Routes = [
  {
    path: "",
    component: NovaComponent,
    canActivate: [NovaGuard],
    canActivateChild: [NovaGuard],
    children: [
      {
        path: "",
        redirectTo: "overview",
        pathMatch: "full"
      },
      {
        path: "overview",
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovaRoutingModule { }
