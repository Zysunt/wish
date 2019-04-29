import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgwishPage } from './imgwish.page';

describe('ImgwishPage', () => {
  let component: ImgwishPage;
  let fixture: ComponentFixture<ImgwishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgwishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgwishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
