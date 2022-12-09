import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeaturedContentComponent } from './components/featured-content/featured-content.component';
import { FeaturedShellComponent } from './components/featured-shell/featured-shell.component';
import { RuntimePipe } from './pipes/runtime.pipe';

@NgModule({
  declarations: [FeaturedShellComponent, FeaturedContentComponent, RuntimePipe],
  imports: [CommonModule],
  exports: [FeaturedShellComponent, RuntimePipe],
})
export class SharedModule {}
