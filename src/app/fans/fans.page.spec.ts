import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FansPage } from './fans.page';

describe('FansPage', () => {
  let component: FansPage;
  let fixture: ComponentFixture<FansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
