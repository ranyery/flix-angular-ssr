import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IFeaturedInfo } from '../../interfaces/IFeaturedInfo';

@Component({
  selector: 'app-featured',
  templateUrl: './featured-shell.component.html',
  styleUrls: ['./featured-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedShellComponent implements OnInit {
  @Input() public featuredInfo!: IFeaturedInfo;

  constructor() {}

  ngOnInit(): void {}
}
