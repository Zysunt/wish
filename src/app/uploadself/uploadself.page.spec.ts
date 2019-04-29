import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadselfPage } from './uploadself.page';

describe('UploadselfPage', () => {
  let component: UploadselfPage;
  let fixture: ComponentFixture<UploadselfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadselfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadselfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
