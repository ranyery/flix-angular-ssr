import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-movie-row-shell',
  templateUrl: './movie-row-shell.component.html',
  styleUrls: ['./movie-row-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieRowShellComponent implements OnInit {
  @Input() public section!: any;

  public sectionName!: any;
  public movies!: any;

  private amountOfClicks: number = 1;
  public scrollX: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.sectionName = Object.keys(this.section)[0];
    this.movies = Object.values(this.section)[0];
  }

  public handleLeftArrowClick() {
    let x = this.scrollX + Math.round(window.innerWidth / 2);
    if (Math.abs(x) <= Math.round(window.innerWidth / 2)) {
      this.scrollX = 0;
      return;
    }
    this.scrollX = x;

    const cardsVisible = Math.floor((window.innerWidth - 40) / 200);
    if (cardsVisible === 1) this.amountOfClicks -= 1;
    if (this.scrollX === 0) this.amountOfClicks = 1;
    // console.log('amountOfClicks', this.amountOfClicks);
  }

  public handleRightArrowClick() {
    if (this.amountOfClicks >= this.section.length) return;

    const maxMarginLeft = (this.section.length * 200) / 2 + 200;
    const cardsVisible = Math.floor((window.innerWidth - 40) / 200);

    if (this.scrollX === 0 && cardsVisible === 1) {
      // !! DO NOT TOUCH !!
      const middleScreen =
        window.innerWidth -
        100 +
        (200 - ((window.innerWidth - 40) / 200 - 1) * 200) -
        window.innerWidth / 2;
      this.scrollX = -middleScreen;
      this.amountOfClicks += 1;
      // console.log('amountOfClicks', this.amountOfClicks);
      return;
    }

    if (cardsVisible === 1) {
      this.amountOfClicks += 1;
      // console.log('amountOfClicks', this.amountOfClicks);
      this.scrollX -= 200;
      return;
    }

    if (
      Math.abs(this.scrollX) + Math.ceil(cardsVisible / 2) * 200 >=
      maxMarginLeft
    ) {
      this.scrollX = -maxMarginLeft;
      this.amountOfClicks = 0;
      // console.log('amountOfClicks', this.amountOfClicks);
      return;
    }

    this.scrollX -= Math.ceil(cardsVisible / 2) * 200;
  }
}
