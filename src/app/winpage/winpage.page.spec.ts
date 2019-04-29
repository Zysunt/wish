import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinpagePage } from './winpage.page';

describe('WinpagePage', () => {
  let component: WinpagePage;
  let fixture: ComponentFixture<WinpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
