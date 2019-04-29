import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherendPage } from './otherend.page';

describe('OtherendPage', () => {
  let component: OtherendPage;
  let fixture: ComponentFixture<OtherendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
