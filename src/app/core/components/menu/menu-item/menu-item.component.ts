import { Component, OnInit, Input } from '@angular/core';

import { NavService } from '../../../services/navigation.service';

@Component({
  selector: 'app-core-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  hover: boolean = false;

  @Input() label: string;
  @Input() route: string;

  constructor(
    public nav: NavService,
  ) { }

  ngOnInit() {
  }

}
