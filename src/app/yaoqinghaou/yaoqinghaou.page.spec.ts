import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaoqinghaouPage } from './yaoqinghaou.page';

describe('YaoqinghaouPage', () => {
  let component: YaoqinghaouPage;
  let fixture: ComponentFixture<YaoqinghaouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaoqinghaouPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaoqinghaouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
