import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsehomepagePage } from './elsehomepage.page';

describe('ElsehomepagePage', () => {
  let component: ElsehomepagePage;
  let fixture: ComponentFixture<ElsehomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElsehomepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsehomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
