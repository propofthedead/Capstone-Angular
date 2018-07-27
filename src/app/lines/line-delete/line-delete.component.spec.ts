import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDeleteComponent } from './line-delete.component';

describe('LineDeleteComponent', () => {
  let component: LineDeleteComponent;
  let fixture: ComponentFixture<LineDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
