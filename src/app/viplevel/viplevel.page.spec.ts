import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViplevelPage } from './viplevel.page';

describe('ViplevelPage', () => {
  let component: ViplevelPage;
  let fixture: ComponentFixture<ViplevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViplevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViplevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
