import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTipComponent } from './tip.component';

describe('TipComponent', () => {
  let component: ProgrammingTipComponent;
  let fixture: ComponentFixture<ProgrammingTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
