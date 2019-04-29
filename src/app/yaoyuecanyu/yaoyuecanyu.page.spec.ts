import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaoyuecanyuPage } from './yaoyuecanyu.page';

describe('YaoyuecanyuPage', () => {
  let component: YaoyuecanyuPage;
  let fixture: ComponentFixture<YaoyuecanyuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaoyuecanyuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaoyuecanyuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
