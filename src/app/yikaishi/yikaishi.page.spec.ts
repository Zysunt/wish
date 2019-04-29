import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YikaishiPage } from './yikaishi.page';

describe('YikaishiPage', () => {
  let component: YikaishiPage;
  let fixture: ComponentFixture<YikaishiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YikaishiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YikaishiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
