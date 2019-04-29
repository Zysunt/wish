import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealnamePage } from './realname.page';

describe('RealnamePage', () => {
  let component: RealnamePage;
  let fixture: ComponentFixture<RealnamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealnamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
