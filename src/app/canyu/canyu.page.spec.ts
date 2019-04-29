import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanyuPage } from './canyu.page';

describe('CanyuPage', () => {
  let component: CanyuPage;
  let fixture: ComponentFixture<CanyuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanyuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanyuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
