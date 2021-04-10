import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
          { path: 'graphic1', component: Graphic1Component, data: { titulo: 'Graphics'} },
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Account Settings'} },
          { path: 'promise', component: PromiseComponent, data: { titulo: 'Promise'} },
          { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
