import { Component, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/IMovie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-featured-shell',
  templateUrl: './featured-shell.component.html',
  styleUrls: ['./featured-shell.component.scss'],
})
export class FeaturedShellComponent implements OnInit {
  public featuredInfo: IMovie | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const idRandomMovie = Math.floor(Math.random() * 250) + 1;
    this.movieService.getById(idRandomMovie).subscribe((data) => {
      this.featuredInfo = data;
    });
  }
}
