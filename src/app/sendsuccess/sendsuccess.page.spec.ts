import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendsuccessPage } from './sendsuccess.page';

describe('SendsuccessPage', () => {
  let component: SendsuccessPage;
  let fixture: ComponentFixture<SendsuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendsuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
