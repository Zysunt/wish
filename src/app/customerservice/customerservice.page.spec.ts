import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerservicePage } from './customerservice.page';

describe('CustomerservicePage', () => {
  let component: CustomerservicePage;
  let fixture: ComponentFixture<CustomerservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
