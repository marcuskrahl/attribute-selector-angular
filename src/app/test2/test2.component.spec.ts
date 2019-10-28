import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2Component } from './test2.component';

describe('Test2Component', () => {
  let component: Test2Component;
  let fixture: ComponentFixture<Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    component.attrTest = '42';
    fixture.detectChanges();
  });

  it('should keep input value', () => {
    expect(component.attrTest).toBe('42'); //succeeds
  });
});
