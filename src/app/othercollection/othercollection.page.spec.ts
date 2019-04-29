import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercollectionPage } from './othercollection.page';

describe('OthercollectionPage', () => {
  let component: OthercollectionPage;
  let fixture: ComponentFixture<OthercollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthercollectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
