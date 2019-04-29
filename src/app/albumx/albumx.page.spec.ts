import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumxPage } from './albumx.page';

describe('AlbumxPage', () => {
  let component: AlbumxPage;
  let fixture: ComponentFixture<AlbumxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
