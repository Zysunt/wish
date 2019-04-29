import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XieyiPage } from './xieyi.page';

describe('XieyiPage', () => {
  let component: XieyiPage;
  let fixture: ComponentFixture<XieyiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XieyiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XieyiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
