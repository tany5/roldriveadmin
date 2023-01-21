import { Component, Input } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input('menuRef') menuRef: MatMenu | undefined
  @Input('menuItems') menuItems: object = {}
  @Input('poistion') poistion: string = 'before'

}
