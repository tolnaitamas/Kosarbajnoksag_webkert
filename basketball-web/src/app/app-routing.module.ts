import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './services/authentication.guard';


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
      loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule),
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'create_results',
      loadChildren: () => import('./pages/create-results/create-results.module').then(m => m.CreateResultsModule),
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'favourite',
      loadChildren: () => import('./pages/favourite/favourite.module').then(m => m.FavouriteModule),
      canActivate: [AuthenticationGuard]
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
