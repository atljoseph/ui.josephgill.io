import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationHoverClickComponent } from './animation-hover-click.component';

describe('HoverComponent', () => {
  let component: AnimationHoverClickComponent;
  let fixture: ComponentFixture<AnimationHoverClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationHoverClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationHoverClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
