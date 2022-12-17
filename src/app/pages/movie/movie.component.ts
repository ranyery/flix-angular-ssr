import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movieData!: IMovie;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.movieData = this.activatedRoute.snapshot.data?.['movieData'];
    if (!this.movieData) this.route.navigate(['/']);
  }
}
