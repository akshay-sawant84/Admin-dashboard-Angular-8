import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCardsComponent } from './title-cards.component';

describe('TitleCardsComponent', () => {
  let component: TitleCardsComponent;
  let fixture: ComponentFixture<TitleCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
