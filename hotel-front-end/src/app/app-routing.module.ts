import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './pages/auth/guards';
import { QuartoPageComponent } from './pages/quarto/components/quarto-page/quarto-page.component';
import { ReservaPageComponent } from './pages/reserva/components/reserva-page/reserva-page.component';
import { ClientePageComponent } from './pages/cliente/components/cliente-page/cliente-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cliente',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ClientePageComponent
  },
  {
    path: 'quarto',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: QuartoPageComponent
  },
  {
    path: 'reserva',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ReservaPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
