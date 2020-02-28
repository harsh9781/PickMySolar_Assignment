import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Innerpage1Component } from './innerpage1.component';

describe('Innerpage1Component', () => {
  let component: Innerpage1Component;
  let fixture: ComponentFixture<Innerpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Innerpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Innerpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
