import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Password0Page } from './password0.page';

describe('Password0Page', () => {
  let component: Password0Page;
  let fixture: ComponentFixture<Password0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Password0Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Password0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
