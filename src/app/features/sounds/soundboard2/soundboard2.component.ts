import {
  Component, OnInit,
  OnChanges,
  Input,
  ViewChildren, QueryList,
  ElementRef,
} from '@angular/core';

import { LogService } from '../../../core/services/log.service';
import { SoundService } from '../../../core/services/sound.service';

import { AnimatedFlipCardComponent} from '../../../shared/components/animated-flip-card/animated-flip-card.component';

import { soundDataFromKey } from './soundboard2.data';
import { ISoundboardCell } from './soundboard2.types';

@Component({
  selector: 'app-soundboard2',
  templateUrl: './soundboard2.component.html',
  styleUrls: ['./soundboard2.component.scss'],
})
export class Soundboard2Component implements OnInit, OnChanges {

  @ViewChildren(AnimatedFlipCardComponent) flipCards !: QueryList<AnimatedFlipCardComponent>;

  @Input() soundSourceArray: ISoundboardCell[];
  @Input() soundSourceArrayKey: string = 'numbers';
  @Input() soundRowCapacity: number = 5;
  // this is for retarded IE
  @Input() soundBoardHeight: number;
  @Input() soundBoardSpeed: string = 'medium';
  @Input() isOrderedRandomly: boolean = false;

  soundboardData: ISoundboardCell[];

  constructor(
    private logger: LogService,
    private sound: SoundService,
    private el: ElementRef
  ) { }

  load() {
    if (this.soundSourceArrayKey) this.soundSourceArray = soundDataFromKey(this.soundSourceArrayKey);
    if (this.soundSourceArray) this.initSoundBoard(this.soundSourceArray);
    this.logger.log('load()', 'SoundboardComponent', { data: this.soundSourceArray })
  }

  ngOnInit() {
    this.load();
  }

  ngOnChanges() {
    this.load();
  }

  onFlipStart(cell: ISoundboardCell, flipFlop: AnimatedFlipCardComponent): void {
    this.logger.log('onFlipStart', 'SoundboardComponent', { cell, flipFlop })
    // try to only keep one card flipped at a time
    const backFacingCard = this.flipCards.find((card) => {
      return !card.isFrontShowing && !card.isFlipping;
    });
    if (backFacingCard) {
      backFacingCard.flipFront();
    }
    // for hovering
    // // play a sound when flipping, but not a million of them
    // const newlyFlippingCard = this.flipCards.find((card) => {
    //   return !card.isFrontShowing && card.isFlipping;
    // });
    // if (newlyFlippingCard) {
    //   this.sound.play('neck-snap.mp3', 0.05);
    // }
    // only "snap" for one card
    if (cell && !flipFlop.isFrontShowing) this.sound.play('neck-snap.mp3', 0.1);

  }
  onFlipDone(cell: ISoundboardCell, flipFlop: AnimatedFlipCardComponent): void {
    this.logger.log('onFlipDone', 'SoundboardComponent', { cell })
    if (cell && !flipFlop.isFrontShowing) this.sound.play(cell.soundClick || 'pew.mp3', 0.75);
  }

  onFlipperClick(cell: ISoundboardCell, flipFlop: AnimatedFlipCardComponent): void {
    // this.logger.log('onFlipperClick', 'SoundboardComponent', { cell })
    flipFlop.flipBack();
    // this.sound.play('neck-snap.mp3', 0.05);
    // this.sound.play(cell.soundClick || 'pew.mp3', 0.55);
  }

  initSoundBoard(seedArray: ISoundboardCell[]) {
    this.soundboardData = [];
    const soundboardDataTemp = [];

    let arrayTemp = seedArray.slice();
    let newRow;
    while (arrayTemp.length > 0) {
      newRow = [];
      for (let i = 0; i < this.soundRowCapacity; i++) {
        let cellData: ISoundboardCell = { isPlaceholder: true };
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
        // console.log(randomRaw, randomIndex, randomValue, arrayTemp);
        if (cellData) newRow.push(cellData);
        arrayTemp.splice(index, 1);
      }
      soundboardDataTemp.push(newRow);
    }
    this.soundboardData = soundboardDataTemp;
    this.logger.log('Finished building lists to populate board.', 'SoundboardComponent', { soundboardData: this.soundboardData })
  }

  get cellSize(): number {
    if (this.el) {
      const width = this.el.nativeElement.offsetWidth;
      const size = width / this.soundRowCapacity;
      return size;
    }
    return 0;
  }

}
