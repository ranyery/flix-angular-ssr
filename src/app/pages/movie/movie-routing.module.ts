import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieResolver } from './movie.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    resolve: { movieData: MovieResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
