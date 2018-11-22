import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundboardCellComponent } from './soundboard-cell.component';

describe('SoundboardCellComponent', () => {
  let component: SoundboardCellComponent;
  let fixture: ComponentFixture<SoundboardCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundboardCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundboardCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
