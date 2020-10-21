import { Component, ViewEncapsulation } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectorComponent {
  constructor(public dateService: DateService) {}

  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
