import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GridService } from '../../services/grid.service';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  public grid;

  constructor(private generatorService: GridService,
              public gridService: GridService) {
  }

  ngOnInit() {
    this.generatorService.gridParameters
      .takeUntil(this.ngUnsubscribe)
      .subscribe(gridParameters => this.renderGrid(gridParameters));

    this.gridService.gridSubject
      .takeUntil(this.ngUnsubscribe)
      .subscribe(grid => {
        if (typeof grid === 'string') {
          return this.grid = JSON.parse(grid);
        }
        this.grid = grid;
      });
  }

  private renderGrid(gridParameters) {
    this.gridService.generateGrid(gridParameters.rows, gridParameters.columns);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
