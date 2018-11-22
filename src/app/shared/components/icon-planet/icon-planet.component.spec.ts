import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlanetComponent } from './icon-planet.component';

describe('IconPlanetComponent', () => {
  let component: IconPlanetComponent;
  let fixture: ComponentFixture<IconPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
