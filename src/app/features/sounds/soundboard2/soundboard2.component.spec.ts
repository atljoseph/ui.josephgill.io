import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Soundboard2Component } from './soundboard2.component';

describe('Soundboard2Component', () => {
  let component: Soundboard2Component;
  let fixture: ComponentFixture<Soundboard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Soundboard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Soundboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
