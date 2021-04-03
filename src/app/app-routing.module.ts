import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  // path: 'dashboard' PagesRouting
  // path: 'auth' AuthRouting
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  imports: [
    PagesRoutingModule,
    AuthRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
