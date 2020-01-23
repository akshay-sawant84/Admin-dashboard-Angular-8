import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSystemComponent } from './color-system.component';

describe('ColorSystemComponent', () => {
  let component: ColorSystemComponent;
  let fixture: ComponentFixture<ColorSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
