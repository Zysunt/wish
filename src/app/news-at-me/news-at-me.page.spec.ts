import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAtMePage } from './news-at-me.page';

describe('NewsAtMePage', () => {
  let component: NewsAtMePage;
  let fixture: ComponentFixture<NewsAtMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAtMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAtMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
