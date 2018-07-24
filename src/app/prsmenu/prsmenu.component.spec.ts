import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrsmenuComponent } from './prsmenu.component';

describe('PrsmenuComponent', () => {
  let component: PrsmenuComponent;
  let fixture: ComponentFixture<PrsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrsmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
