import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdyijieshuPage } from './hdyijieshu.page';

describe('HdyijieshuPage', () => {
  let component: HdyijieshuPage;
  let fixture: ComponentFixture<HdyijieshuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdyijieshuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdyijieshuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
