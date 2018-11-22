import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';

// import { numberSoundBoard, alphabetSoundBoard } from './soundboard/soundboard.data';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnInit, OnDestroy {

  soundboardTypeKey: string = 'alphabet::upper';
  soundboardTypeLabel: string = 'Alphabet';
  soundboardTypeDropdownShown: boolean = false;
  soundboardIsRandom: boolean = false;
  soundboardIsRandomLabel: string = 'Ordered';
  soundboardIsRandomDropdownShown: boolean = false;

  constructor(
    private header: HeaderService
  ) { 
    // this.header.setTitle('Sounds');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.header.clearTitle();
  }  

  soundBoardChangeType(key: string, label: string) {
    this.soundboardTypeKey = key;
    this.soundboardTypeLabel = label;
    this.soundboardTypeDropdownShown = false;
  }

  soundBoardChangeIsRandom(isRandom: boolean, label: string) {
    this.soundboardIsRandom = isRandom;
    this.soundboardIsRandomLabel = label;
    this.soundboardIsRandomDropdownShown = false;
  }

}
