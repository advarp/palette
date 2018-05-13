import { Component, HostListener, Input } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
})

export class GridCellComponent {
  @Input() public col;

  @HostListener('drop', ['$event']) onDrop(event) {
    if (event.rgb) {
      this.col.color = UtilsService.blendingColors(this.col.color, event.rgb);
    }
  }

}
