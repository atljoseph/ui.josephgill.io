import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {

  constructor(
    private header: HeaderService
  ) { 
    this.header.setTitle('Music');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.header.clearTitle();
  } 

}
