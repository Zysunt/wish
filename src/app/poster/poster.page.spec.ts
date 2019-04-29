import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPage } from './poster.page';

describe('PosterPage', () => {
  let component: PosterPage;
  let fixture: ComponentFixture<PosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
