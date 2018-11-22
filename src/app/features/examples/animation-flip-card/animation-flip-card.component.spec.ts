import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFlipCardComponent } from './animation-flip-card.component';

describe('AnimationFlipCardComponent', () => {
  let component: AnimationFlipCardComponent;
  let fixture: ComponentFixture<AnimationFlipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFlipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
