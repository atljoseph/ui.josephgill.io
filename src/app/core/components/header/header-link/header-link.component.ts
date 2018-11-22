import { Component, OnInit, Input } from '@angular/core';

import { NavService } from '../../../services/navigation.service';
import { MenuService } from '../../../services/menu.service';
import { HeaderService } from '../../../services/header.service';

import { 
  headerHeight, 
 } from '../../style.constants';

@Component({
  selector: 'app-core-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss']
})
export class HeaderLinkComponent implements OnInit {

  @Input() route: string;
  @Input() isVisible: boolean = true;
  @Input() hoverDirection: string = 'right';
  @Input() routeHighlight: boolean = true;

  hover: boolean;

  constructor(
    public nav: NavService,
    public menu: MenuService,
    public header: HeaderService,
  ) { }

  ngOnInit() {
  }

}
