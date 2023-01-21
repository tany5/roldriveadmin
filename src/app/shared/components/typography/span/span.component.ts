import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-span',
  templateUrl: './span.component.html',
  styleUrls: ['./span.component.scss']
})
export class SpanComponent {
  @Input('className') className: string = ''
}
