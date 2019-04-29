import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntsuccessPage } from './intsuccess.page';

describe('IntsuccessPage', () => {
  let component: IntsuccessPage;
  let fixture: ComponentFixture<IntsuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntsuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
