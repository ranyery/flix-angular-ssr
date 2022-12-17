import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/IMovie';
import { SEOService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featuredMovie!: IMovie;
  public sections: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    const homeData = this.activatedRoute.snapshot.data?.['homeData'];
    const { featured, sections } = homeData;
    this.featuredMovie = featured;
    this.sections = sections;

    this.seoService.setMetaTitle(
      'Top 250 melhores filmes de todos os tempos (segundo o IMDb) | Flix'
    );

    this.seoService.setMetaDescription(
      'Se você é um cinéfilo e quer descobrir quais são os melhores filmes de todos os tempos, então acesse o nosso site agora mesmo! Você vai encontrar uma lista com os 250 filmes mais bem avaliados pela crítica e pelo público. Não perca a oportunidade de ampliar ainda mais seu conhecimento sobre o mundo do cinema e de encontrar novas inspirações para as suas próximas sessões de filmes. Acesse agora!'
    );
  }
}
