import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Innerpage2Component } from './innerpage2.component';

describe('Innerpage2Component', () => {
  let component: Innerpage2Component;
  let fixture: ComponentFixture<Innerpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Innerpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Innerpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
