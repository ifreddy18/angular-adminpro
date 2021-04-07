import { Component } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})
export class Graphic1Component {

  labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data: MultiDataSet = [
    [350, 450, 100],
  ];

}
