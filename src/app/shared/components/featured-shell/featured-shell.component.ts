import { Component, Input, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/IMovie';

@Component({
  selector: 'app-featured-shell',
  templateUrl: './featured-shell.component.html',
  styleUrls: ['./featured-shell.component.scss'],
})
export class FeaturedShellComponent implements OnInit {
  @Input() public featuredMovie!: IMovie;

  constructor() {}

  ngOnInit(): void {}
}
