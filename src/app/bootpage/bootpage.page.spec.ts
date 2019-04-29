import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootpagePage } from './bootpage.page';

describe('BootpagePage', () => {
  let component: BootpagePage;
  let fixture: ComponentFixture<BootpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
