import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishalbumPage } from './wishalbum.page';

describe('WishalbumPage', () => {
  let component: WishalbumPage;
  let fixture: ComponentFixture<WishalbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishalbumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishalbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
