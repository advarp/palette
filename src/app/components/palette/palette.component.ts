import { Component } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})

export class PaletteComponent {
  colors = [
    {
      rgb: 'rgb(26,188,156)',
      name: 'Turquoise'
    },
    {
      rgb: 'rgb(22,160,133)',
      name: 'Greensea'
    },
    {
      rgb: 'rgb(241,196,15)',
      name: 'Sunflower'
    },
    {
      rgb: 'rgb(243,156,18)',
      name: 'Orange'
    },
    {
      rgb: 'rgb(46,204,113)',
      name: 'Emerland'
    },
    {
      rgb: 'rgb(39,174,96)',
      name: 'Nephritis'
    },
    {
      rgb: 'rgb(230,126,34)',
      name: 'Carrot'
    },
    {
      rgb: 'rgb(211,84,0)',
      name: 'Pumpkin'
    },
    {
      rgb: 'rgb(52,152,219)',
      name: 'Peterriver'
    },
    {
      rgb: 'rgb(41,128,185)',
      name: 'Belizehole'
    },
    {
      rgb: 'rgb(231,76,60)',
      name: 'Alizarin'
    },
    {
      rgb: 'rgb(192,57,43)',
      name: 'Pomegrante'
    }
  ];
}
