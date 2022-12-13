import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { FeaturedContentComponent } from './components/featured-content/featured-content.component';
import { FeaturedShellComponent } from './components/featured-shell/featured-shell.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieRowShellComponent } from './components/movie-row-shell/movie-row-shell.component';
import { RuntimePipe } from './pipes/runtime.pipe';
import { MovieService } from './services/movie.service';
import { TransferStateService } from './services/transfer-state.service';

@NgModule({
  declarations: [
    ButtonComponent,
    FeaturedContentComponent,
    FeaturedShellComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieRowShellComponent,
    RuntimePipe,
  ],
  providers: [MovieService, TransferStateService],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    FeaturedShellComponent,
    HeaderComponent,
    MovieRowShellComponent,
    RuntimePipe,
  ],
})
export class SharedModule {}
