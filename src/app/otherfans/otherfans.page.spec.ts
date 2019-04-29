import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherfansPage } from './otherfans.page';

describe('OtherfansPage', () => {
  let component: OtherfansPage;
  let fixture: ComponentFixture<OtherfansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherfansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherfansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
