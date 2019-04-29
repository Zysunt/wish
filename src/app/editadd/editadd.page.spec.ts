import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddPage } from './editadd.page';

describe('EditaddPage', () => {
  let component: EditaddPage;
  let fixture: ComponentFixture<EditaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
