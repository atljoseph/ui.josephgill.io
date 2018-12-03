import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTipsComponent } from './tips.component';

describe('TipsComponent', () => {
  let component: ProgrammingTipsComponent;
  let fixture: ComponentFixture<ProgrammingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
