import { MatMenu } from '@angular/material/menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropMenuItems: object = [
  ]
  menu: any
  constructor() { }

  ngOnInit(): void {
  }

}
