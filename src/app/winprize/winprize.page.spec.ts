import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinprizePage } from './winprize.page';

describe('WinprizePage', () => {
  let component: WinprizePage;
  let fixture: ComponentFixture<WinprizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinprizePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinprizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
