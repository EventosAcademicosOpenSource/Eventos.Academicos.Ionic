import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LPAuthGuard } from 'laravel-passport';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [LPAuthGuard],
    data: { loginRoute: '/login' },
  },
  {
    path: 'login',
    loadChildren: './pages/auth/login/login.module#LoginPageModule',
  },
  {
    path: 'register',
    loadChildren: './pages/auth/register/register.module#RegisterPageModule',
  },

  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
    canActivate: [LPAuthGuard],
    data: { loginRoute: '/login' },
  },
  {
    path: 'event/:id',
    loadChildren: () =>
      import('./pages/event/event.module').then(m => m.EventPageModule),
    canActivate: [LPAuthGuard],
    data: { loginRoute: '/login' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
