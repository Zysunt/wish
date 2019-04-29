import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvataralbumPage } from './avataralbum.page';

describe('AvataralbumPage', () => {
  let component: AvataralbumPage;
  let fixture: ComponentFixture<AvataralbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvataralbumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvataralbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
