import { Subject } from 'rxjs/Subject';
import 'rxjs/observable/of';

export class GridService {
  public gridSubject = new Subject();
  public gridParameters = new Subject();

  generateGrid(rowsCount: number, columnsCount: number): void {
    const grid = [];

    for (let i = 0; i < rowsCount; i++) {
      const rows = [];

      for (let k = 0; k < columnsCount; k++) {
        rows.push({color: null});
      }

      grid.push(rows);
    }

    this.gridSubject.next(grid);
  }

  gridFromJson(grid): void {
    this.gridSubject.next(grid);
  }

}
