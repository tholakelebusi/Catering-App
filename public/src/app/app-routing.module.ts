import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resert',
    loadChildren: () => import('./Components/resert/resert.module').then( m => m.ResertPageModule)
  },
  {
    path: 'full-meal',
    loadChildren: () => import('./Components/Food/full-meal/full-meal.module').then( m => m.FullMealPageModule)
  },
  {
    path: 'dessert',
    loadChildren: () => import('./Components/Food/dessert/dessert.module').then( m => m.DessertPageModule)
  },
  {
    path: 'snack',
    loadChildren: () => import('./Components/Food/snack/snack.module').then( m => m.SnackPageModule)
  },
  {
    path: 'platters',
    loadChildren: () => import('./Components/Food/platters/platters.module').then( m => m.PlattersPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
