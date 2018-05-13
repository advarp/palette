import { Component } from '@angular/core';
import { GridService } from '../../services/grid.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})

export class GeneratorComponent {
  public isGenerated = false;

  constructor(public gridService: GridService) {
  }

  public onSubmit(event: NgForm) {
    this.gridService.gridParameters.next(event.value);
    this.isGenerated = true;
  }

}
