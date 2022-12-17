import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/IMovie';
import { SEOService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movieData!: IMovie;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    this.movieData = this.activatedRoute.snapshot.data?.['movieData'];
    if (!this.movieData) this.route.navigate(['/']);

    this.seoService.setMetaTitle(`${this.movieData.title} | Flix`);
    this.seoService.setMetaDescription(
      `Descubra tudo o que precisa saber sobre ${this.movieData.title}! Aproveite para descobrir novas sugestões de filmes para assistir.`
    );
  }
}
