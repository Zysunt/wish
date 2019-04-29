import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherfollowPage } from './otherfollow.page';

describe('OtherfollowPage', () => {
  let component: OtherfollowPage;
  let fixture: ComponentFixture<OtherfollowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherfollowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherfollowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
