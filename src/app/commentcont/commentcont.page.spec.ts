import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentcontPage } from './commentcont.page';

describe('CommentcontPage', () => {
  let component: CommentcontPage;
  let fixture: ComponentFixture<CommentcontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentcontPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentcontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
