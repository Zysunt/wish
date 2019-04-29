import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityalbumPage } from './activityalbum.page';

describe('ActivityalbumPage', () => {
  let component: ActivityalbumPage;
  let fixture: ComponentFixture<ActivityalbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityalbumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityalbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
