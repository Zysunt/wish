import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcredentialsPage } from './uploadcredentials.page';

describe('UploadcredentialsPage', () => {
  let component: UploadcredentialsPage;
  let fixture: ComponentFixture<UploadcredentialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadcredentialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadcredentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
