import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesDetailsPagePageRoutingModule } from './movies-details-page-routing.module';

import { MoviesDetailsPagePage } from './movies-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesDetailsPagePageRoutingModule
  ],
  declarations: [MoviesDetailsPagePage]
})
export class MoviesDetailsPagePageModule {}
