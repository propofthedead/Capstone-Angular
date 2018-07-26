import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesGetComponent } from './lines-get.component';

describe('LinesGetComponent', () => {
  let component: LinesGetComponent;
  let fixture: ComponentFixture<LinesGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
