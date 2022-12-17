import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import movies from '../../../assets/data/movies.json';
import { IMovie } from '../interfaces/IMovie';
import { FetchOrCacheService } from './fetch-or-cache.service';

const genres: string[] = [
  'Animação',
  'Aventura',
  'Ação',
  'Comédia',
  'Crime',
  'Drama',
  'Família',
  'Fantasia',
  'Faroeste',
  'Ficção científica',
  'Guerra',
  'História',
  'Mistério',
  'Música',
  'Romance',
  'Terror',
  'Thriller',
];

function slugify(text = '') {
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

interface ISection {
  [k: string]: Partial<IMovie>[];
}

interface IGetAllResponse {
  featured: IMovie;
  sections: ISection[];
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private fetchOrCacheService: FetchOrCacheService) {}

  getBySlug(slug: string): Observable<IMovie | null> {
    const movie = movies.find((movie) => slugify(movie.title) === slug);
    if (!movie) return of(null);

    return this.fetchOrCacheService.set<IMovie>(slug, of(movie));
  }

  getAll(): Observable<IGetAllResponse> {
    // Obter 3 tipos categorias
    const sectionKeys: string[] = [];
    while (sectionKeys.length < 3) {
      const index = Math.floor(Math.random() * genres.length);
      if (!sectionKeys.includes(genres[index])) {
        sectionKeys.push(genres[index]);
      }
    }

    // Obter 20 filmes para cada categoria, sem repetir
    const sections: ISection[] = [];
    sectionKeys.forEach((key, index) => {
      sections[index] = { [key]: [] };
    });

    sections.forEach((key, i) => {
      while (sections[i][Object.keys(key)[0]].length < 20) {
        const index = Math.floor(Math.random() * movies.length) + 1;
        const movie = movies[index];
        const movieInArray = sections[i][Object.keys(key)[0]].some(
          // Analisar melhor essa função, sem o ? está quebrando o código
          (m) => m?.ranking === movie?.ranking
        );
        if (!movieInArray) {
          const { title, imdbRating } = movie;
          sections[i][Object.keys(key)[0]].push({ title, imdbRating });
        }
      }
    });

    const indexFeatured = Math.floor(Math.random() * movies.length);
    const featured = movies[indexFeatured];

    const result: IGetAllResponse = { featured, sections };

    return this.fetchOrCacheService.set<IGetAllResponse>('getAll', of(result));
  }
}
