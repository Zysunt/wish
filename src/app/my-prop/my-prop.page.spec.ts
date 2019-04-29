import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropPage } from './my-prop.page';

describe('MyPropPage', () => {
  let component: MyPropPage;
  let fixture: ComponentFixture<MyPropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
