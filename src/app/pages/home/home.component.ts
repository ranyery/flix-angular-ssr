import { Component, OnInit } from '@angular/core';

import { IFeaturedInfo } from '../../shared/interfaces/IFeaturedInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public featuredInfo: IFeaturedInfo = {
    title: 'Cara e Coragem',
    imdbRating: '7,1',
    releaseDate: 2022,
    runtime: 125,
    overview:
      'A Siderúrgica Gusmão desenvolve uma fórmula secreta que vira alvo da cobiça de Leonardo, irmão da diretora da empresa, Clarice. Pat e Moa são contratados para encontrar a fórmula, mas precisam investi...',
    genres: ['Comédia', 'Action', 'Adventure', 'Soap'],
    backgroundImage:
      'https://image.tmdb.org/t/p/original/1UCGE1Dl7iClKIbDMcGWiHKVWCU.jpg',
  };
}
