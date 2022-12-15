import { Component, Input, OnInit } from '@angular/core';

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

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.slug = this.utilsService.slugify(this.featuredMovie.title);
  }
}
