import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayscaleComponent } from './grayscale.component';

describe('GrayscaleComponent', () => {
  let component: GrayscaleComponent;
  let fixture: ComponentFixture<GrayscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
