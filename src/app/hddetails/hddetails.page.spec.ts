import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HddetailsPage } from './hddetails.page';

describe('HddetailsPage', () => {
  let component: HddetailsPage;
  let fixture: ComponentFixture<HddetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HddetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HddetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
