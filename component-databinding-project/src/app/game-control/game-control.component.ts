import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);

      this.lastNumber++;
    }, 1000);
  }

  onPauseGame(): void {
    clearInterval(this.interval);
  }

  onResetGame(): void {
    clearInterval(this.interval);

    this.lastNumber = 0;
  }

}
