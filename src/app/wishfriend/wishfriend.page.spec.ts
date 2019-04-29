import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishfriendPage } from './wishfriend.page';

describe('WishfriendPage', () => {
  let component: WishfriendPage;
  let fixture: ComponentFixture<WishfriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishfriendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishfriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
