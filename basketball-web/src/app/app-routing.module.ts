import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path: 'login',
      loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    { path: 'register',
      loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
    },
    {
      path: 'results',
      loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule)
    },
    {
      path: 'create-results',
      loadChildren: () => import('./pages/create-results/create-results.module').then(m => m.CreateResultsModule)
    },
    {
      path: 'favourite',
      loadChildren: () => import('./pages/favourite/favourite.module').then(m => m.FavouriteModule)
    },
    {
      path: '**',
      redirectTo: '/login'
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
