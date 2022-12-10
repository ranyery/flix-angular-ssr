import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-row-shell',
  templateUrl: './movie-row-shell.component.html',
  styleUrls: ['./movie-row-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieRowShellComponent implements OnInit {
  public scrollX: number = 0;
  public items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor() {}

  ngOnInit(): void {}

  public handleLeftArrowClick() {
    if (this.scrollX >= 0) return;
    const cardsVisible = Math.trunc(window.innerWidth / 150);
    this.scrollX += cardsVisible * 150;
  }

  public handleRightArrowClick() {
    const cardsVisible = Math.trunc(window.innerWidth / 150);
    if (-this.scrollX + cardsVisible * 150 >= this.items.length * 150) return;
    this.scrollX -= cardsVisible * 150;
  }
}
