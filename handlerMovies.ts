import { Request, Response } from 'express';
import { StatusCodes as HTTP_STATUS_CODES } from 'http-status-codes';

import movies from './src/assets/data/movies.json';

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

interface IMovie {
  ranking: number;
  imdbId: string;
  title: string;
  originalTitle: string;
  imdbRating: string;
  tmdbId: number;
  genres: string[];
  overview: string;
  release_date: string;
  runtime: number;
}

interface ISection {
  [k: string]: Partial<IMovie>[];
}

interface IGetAllResponse {
  featured: IMovie;
  sections: ISection[];
}

export const getAll = (request: Request, response: Response) => {
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

  // retornar filmes
  response.send(result);
};

export const getBySlug = (request: Request, response: Response) => {
  const { slug } = request.params;
  const movie = movies.find((movie) => slugify(movie.title) === slug);
  if (!movie) return response.status(HTTP_STATUS_CODES.NOT_FOUND).send();

  return response.send(movie);
};
