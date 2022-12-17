import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMovie } from '../../interfaces/IMovie';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-featured-shell',
  templateUrl: './featured-shell.component.html',
  styleUrls: ['./featured-shell.component.scss'],
})
export class FeaturedShellComponent implements OnInit {
  public slug!: string;
  @Input() public featuredMovie!: IMovie;

  constructor(private utilsService: UtilsService, private route: Router) {}

  ngOnInit(): void {
    if (!this.featuredMovie) {
      this.route.navigate(['/']);
      return;
    }
    this.slug = this.utilsService.slugify(this.featuredMovie?.title);
  }
}
