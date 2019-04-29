import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideowishPage } from './videowish.page';

describe('VideowishPage', () => {
  let component: VideowishPage;
  let fixture: ComponentFixture<VideowishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideowishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideowishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
