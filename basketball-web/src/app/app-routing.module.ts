import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path: 'register',
      loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
    },
    { path: 'login',
      loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
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
