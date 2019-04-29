import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcardPage } from './personalcard.page';

describe('PersonalcardPage', () => {
  let component: PersonalcardPage;
  let fixture: ComponentFixture<PersonalcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
