import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesHomePagePageRoutingModule } from './movies-home-page-routing.module';

import { MoviesHomePagePage } from './movies-home-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesHomePagePageRoutingModule
  ],
  declarations: [MoviesHomePagePage]
})
export class MoviesHomePagePageModule {}
