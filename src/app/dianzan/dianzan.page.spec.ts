import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DianzanPage } from './dianzan.page';

describe('DianzanPage', () => {
  let component: DianzanPage;
  let fixture: ComponentFixture<DianzanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DianzanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DianzanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
