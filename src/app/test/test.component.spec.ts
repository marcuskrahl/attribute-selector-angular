import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.attrTest = '42';
    fixture.detectChanges();
  });

  it('should keep input value', () => {
    expect(component.attrTest).toBe('42'); //Fails: expected '' to be '42'
  });
});
