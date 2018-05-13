import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridService } from '../../services/grid.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})

export class ManageComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  public grid;
  public isValid = true;

  constructor(public gridService: GridService) {
  }

  get gridValue() {
    return JSON.stringify(this.grid, null, 2);
  }

  set gridValue (value) {
    try {
      this.grid = JSON.parse(value);
      this.isValid = true;
    } catch (e) {
      this.isValid = false;
      console.log('JSON is not correct');
    }
  }

  onSubmit() {
    this.gridService.gridFromJson(this.grid);
  }

  onReset() {
    this.gridService.gridFromJson([]);
  }

  ngOnInit() {
    this.gridService.gridSubject
      .takeUntil(this.ngUnsubscribe)
      .subscribe(grid => this.grid = grid);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
