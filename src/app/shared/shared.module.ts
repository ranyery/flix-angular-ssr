import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { FeaturedContentComponent } from './components/featured-content/featured-content.component';
import { FeaturedShellComponent } from './components/featured-shell/featured-shell.component';
import { HeaderComponent } from './components/header/header.component';
import { RuntimePipe } from './pipes/runtime.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    FeaturedContentComponent,
    FeaturedShellComponent,
    HeaderComponent,
    RuntimePipe,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    FeaturedShellComponent,
    HeaderComponent,
    RuntimePipe,
  ],
})
export class SharedModule {}
