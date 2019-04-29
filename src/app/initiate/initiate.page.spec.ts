import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatePage } from './initiate.page';

describe('InitiatePage', () => {
  let component: InitiatePage;
  let fixture: ComponentFixture<InitiatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
