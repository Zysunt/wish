import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemebgPage } from './themebg.page';

describe('ThemebgPage', () => {
  let component: ThemebgPage;
  let fixture: ComponentFixture<ThemebgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemebgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemebgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
