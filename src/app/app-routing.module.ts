import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'movies-home-page',
    pathMatch: 'full'
  },
  {
    path: 'movies-home-page',
    loadChildren: () => import('./movies-home-page/movies-home-page.module').then( m => m.MoviesHomePagePageModule)
  },
  {
    path: 'movies-details-page',
    loadChildren: () => import('./movies-details-page/movies-details-page.module').then( m => m.MoviesDetailsPagePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
