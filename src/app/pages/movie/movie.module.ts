import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule, SharedModule],
})
export class MovieModule {}
