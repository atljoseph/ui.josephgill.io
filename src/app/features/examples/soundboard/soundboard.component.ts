import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { LogService } from '../../../core/services/log.service';

import { soundDataFromKey } from './soundboard.data';
import { ISoundBoardCell } from './soundboard.types';

@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundboardComponent implements OnInit {

  @Input() soundSourceArray: ISoundBoardCell[];
  @Input() soundSourceArrayKey: string; // overrides the source array
  @Input() soundRowCapacity: number = 5;
  // this is for retarded IE
  @Input() soundBoardHeight: number;
  @Input() isOrderedRandomly: boolean = false;
  
  soundboardData: ISoundBoardCell[];

  constructor(
    private logger: LogService,
  ) { 
    
  }

  ngOnInit() {
    if (this.soundSourceArrayKey) {
      this.soundSourceArray = soundDataFromKey(this.soundSourceArrayKey);
    }
    this.initSoundBoard(this.soundSourceArray);
  }

  initSoundBoard(seedArray: ISoundBoardCell[]) {
    this.soundboardData = [];
    const soundboardDataTemp = [];
    
    let arrayTemp = seedArray.slice();
    let newRow;
    while (arrayTemp.length > 0) {
      newRow = [];
      for (let i = 0; i < this.soundRowCapacity; i++) {
        let cellData: ISoundBoardCell = {};
        let index = 0;
        if (this.isOrderedRandomly) {
          const randomRaw = Math.random() * arrayTemp.length;
          let randomIndex = Math.floor(randomRaw);
          index = randomIndex < 0 ? 0 : randomIndex;
          cellData = arrayTemp[randomIndex];
        }
        else {
          cellData = arrayTemp[0];
        }
        const newCell: ISoundBoardCell = {
          label: cellData ? cellData.label : undefined,
          sound: cellData ? cellData.sound : undefined
        };
        // console.log(randomRaw, randomIndex, randomValue, arrayTemp);
        newRow.push(newCell);
        arrayTemp.splice(index, 1);
      }
      soundboardDataTemp.push(newRow);
    }
    this.soundboardData = soundboardDataTemp;
    this.logger.log('Finished building lists to populate board.', 'SoundboardComponent', { soundboardData: this.soundboardData })
  }

}
