import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { NavService } from '../../services/navigation.service';
import { LogService } from '../../services/log.service';
import { MenuService } from '../../services/menu.service';
import { HeaderService } from '../../services/header.service';
import { ContentService } from '../../services/content.service';

import { RouterAnimation } from './content.animation';

import {
  headerHeight,
  menuExposedWhenClosedWidth
} from '../style.constants';

@Component({
  selector: 'app-core-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [RouterAnimation],
})
export class ContentComponent implements OnInit {

  @ViewChild('content') contentRef: ElementRef;

  constructor(
    public nav: NavService,
    public menu: MenuService,
    public header: HeaderService,
    public log: LogService,
    private content: ContentService,
  ) { }

  ngOnInit() {
    this.content.setContentElementRef(this.contentRef);
  }

  get appVersion() {
    return `v${environment.version}`;
  }

  get appEnvCode() {
    return environment.envCode;
  }

  get headerHeight(): string {
    return `${headerHeight}px`;
  }

  get menuWidthWhenClosed(): string {
    return `${menuExposedWhenClosedWidth}px`;
  }
}
