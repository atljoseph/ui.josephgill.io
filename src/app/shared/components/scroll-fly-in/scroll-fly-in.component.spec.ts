import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPhotoComponent } from './scroll-photo.component';

describe('ScrollPhotoComponent', () => {
  let component: ScrollPhotoComponent;
  let fixture: ComponentFixture<ScrollPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
