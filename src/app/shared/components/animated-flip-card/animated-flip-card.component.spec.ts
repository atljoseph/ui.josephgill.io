import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedFlipCardComponent } from './animated-flip-card.component';

describe('AnimationFlipCardComponent', () => {
  let component: AnimatedFlipCardComponent;
  let fixture: ComponentFixture<AnimatedFlipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedFlipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
