import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropmallPage } from './propmall.page';

describe('PropmallPage', () => {
  let component: PropmallPage;
  let fixture: ComponentFixture<PropmallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropmallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropmallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
