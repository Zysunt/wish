import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadhangerPage } from './headhanger.page';

describe('HeadhangerPage', () => {
  let component: HeadhangerPage;
  let fixture: ComponentFixture<HeadhangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadhangerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadhangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
