import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGetComponent } from './vendor-get.component';

describe('VendorGetComponent', () => {
  let component: VendorGetComponent;
  let fixture: ComponentFixture<VendorGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
