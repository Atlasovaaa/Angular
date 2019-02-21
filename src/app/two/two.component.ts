import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styles: [ '' ]
})
export class TwoComponent  {
  @Input() message: string[];
  //@Input() condition: boolean;
}
