import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeResolver } from './home.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { homeData: HomeResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
