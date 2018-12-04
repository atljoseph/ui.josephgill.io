import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLandingComponent } from './code-landing.component';

describe('TipsComponent', () => {
  let component: CodeLandingComponent;
  let fixture: ComponentFixture<CodeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
