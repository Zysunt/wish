import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveldescriptionPage } from './leveldescription.page';

describe('LeveldescriptionPage', () => {
  let component: LeveldescriptionPage;
  let fixture: ComponentFixture<LeveldescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveldescriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveldescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
