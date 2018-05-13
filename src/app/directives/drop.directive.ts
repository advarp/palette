import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DragService } from '../services/drag.service';

export interface DropTargetOptions {
  zone?: string;
}

@Directive({
  selector: '[dropTarget]'
})
export class DropTargetDirective {
  private options: DropTargetOptions = {};

  @Input() set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output() myDrop = new EventEmitter();

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event']) onDrop(event) {
    const data =  JSON.parse(event.dataTransfer.getData('Text'));

    this.myDrop.next(data);
  }

  constructor(private dragService: DragService) {
  }
}
