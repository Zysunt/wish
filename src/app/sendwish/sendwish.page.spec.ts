import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendwishPage } from './sendwish.page';

describe('SendwishPage', () => {
  let component: SendwishPage;
  let fixture: ComponentFixture<SendwishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendwishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendwishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
