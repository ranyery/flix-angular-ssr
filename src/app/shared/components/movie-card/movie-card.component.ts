import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { IMovie } from '../../interfaces/IMovie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnInit {
  @Input() public movie!: IMovie;
  public movieSlug!: string;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.movieSlug = this.slugify(this.movie?.title);
  }

  public handleClick(): void {
    this.route.navigate(['/', this.movieSlug]);
  }

  private slugify(text: string = ''): string {
    return text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  }
}
