import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetailsPagePage } from './movies-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesDetailsPagePageRoutingModule {}
