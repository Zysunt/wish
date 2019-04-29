import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfarePage } from './welfare.page';

describe('WelfarePage', () => {
  let component: WelfarePage;
  let fixture: ComponentFixture<WelfarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
