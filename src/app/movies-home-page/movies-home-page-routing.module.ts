import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesHomePagePage } from './movies-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesHomePagePageRoutingModule {}
