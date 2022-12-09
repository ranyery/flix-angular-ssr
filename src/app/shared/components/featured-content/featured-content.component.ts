import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IFeaturedInfo } from '../../interfaces/IFeaturedInfo';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedContentComponent implements OnInit {
  @Input() public featuredInfo!: IFeaturedInfo;

  constructor() {}

  ngOnInit(): void {}
}
