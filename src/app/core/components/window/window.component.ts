import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-core-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {

  constructor(
    public menu: MenuService
  ) { }

  ngOnInit() {
  }



}
