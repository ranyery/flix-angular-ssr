import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featuredMovie!: IMovie;
  public sections: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const homeData = this.activatedRoute.snapshot.data?.['homeData'];
    const { featured, sections } = homeData;
    this.featuredMovie = featured;
    this.sections = sections;
  }
}
