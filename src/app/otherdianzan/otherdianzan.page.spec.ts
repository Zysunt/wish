import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherdianzanPage } from './otherdianzan.page';

describe('OtherdianzanPage', () => {
  let component: OtherdianzanPage;
  let fixture: ComponentFixture<OtherdianzanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherdianzanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherdianzanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
