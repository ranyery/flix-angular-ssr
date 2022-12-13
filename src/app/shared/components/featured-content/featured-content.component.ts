import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IMovie } from '../../interfaces/IMovie';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedContentComponent implements OnInit {
  @Input() public featuredInfo!: IMovie;

  constructor() {}

  ngOnInit(): void {}
}
