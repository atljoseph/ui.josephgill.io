import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { SoundService } from '../../../../core/services/sound.service';
import { LogService } from '../../../../core/services/log.service';

import { ISoundBoardCell } from '../soundboard.types';

@Component({
  selector: 'app-soundboard-cell',
  templateUrl: './soundboard-cell.component.html',
  styleUrls: ['./soundboard-cell.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundboardCellComponent implements OnInit {

  @Input() cellData: ISoundBoardCell;
  hover: boolean;

  constructor(
    private sound: SoundService,
    private logger: LogService,
    
  ) { }

  ngOnInit() {
    // this.logger.log('ngOnInit', 'SoundboardCellComponent', { cellData: this.cellData })
  }

  play() {
    this.sound.play(this.cellData.sound, 0.8);
    // this.cellData.sound ? this.sound.play() : () => {};
  }

  get cellHasValue() {
    return this.cellData.label;
  }

}
