import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private header: HeaderService
  ) { 
    // this.header.setTitle('Home');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.header.clearTitle();
  }  

}
