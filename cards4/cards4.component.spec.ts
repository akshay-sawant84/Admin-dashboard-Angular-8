import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards4Component } from './cards4.component';

describe('Cards4Component', () => {
  let component: Cards4Component;
  let fixture: ComponentFixture<Cards4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cards4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cards4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
