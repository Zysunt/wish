import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegePage } from './privilege.page';

describe('PrivilegePage', () => {
  let component: PrivilegePage;
  let fixture: ComponentFixture<PrivilegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
