import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featuredMovie: IMovie;

  constructor(private activatedRoute: ActivatedRoute) {
    this.featuredMovie = this.activatedRoute.snapshot.data?.['featuredMovie'];
  }

  ngOnInit(): void {}
}
