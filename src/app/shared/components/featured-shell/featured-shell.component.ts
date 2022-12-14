import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

import { IMovie } from '../../interfaces/IMovie';
import { CoreService } from '../../services/core.service';
import { MovieService } from '../../services/movie.service';
import { TransferStateService } from '../../services/transfer-state.service';

@Component({
  selector: 'app-featured-shell',
  templateUrl: './featured-shell.component.html',
  styleUrls: ['./featured-shell.component.scss'],
})
export class FeaturedShellComponent implements OnInit {
  @Input() public featuredMovie!: IMovie;

  private isBrowser: boolean;
  private isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private movieService: MovieService,
    private coreService: CoreService,
    private stateService: TransferStateService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

  async ngOnInit(): Promise<void> {
    // const idRandomMovie = Math.floor(Math.random() * 250) + 1;
    // if (this.isServer) {
    //   const featuredMovie = await this.coreService.waitFor(
    //     this.movieService.getById(idRandomMovie)
    //   );
    //   this.stateService.saveState<IMovie>('featuredMovie', featuredMovie);
    //   this.featuredMovie = featuredMovie;
    // } else {
    //   this.featuredMovie = this.stateService.hasState<IMovie>('featuredMovie')
    //     ? this.stateService.getState<IMovie>('featuredMovie')
    //     : await await this.coreService.waitFor(
    //         this.movieService.getById(idRandomMovie)
    //       );
    // }
  }
}
