import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AitefirendPage } from './aitefirend.page';

describe('AitefirendPage', () => {
  let component: AitefirendPage;
  let fixture: ComponentFixture<AitefirendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AitefirendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AitefirendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
