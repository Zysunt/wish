import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConductactivePage } from './my-conductactive.page';

describe('MyConductactivePage', () => {
  let component: MyConductactivePage;
  let fixture: ComponentFixture<MyConductactivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConductactivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConductactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
