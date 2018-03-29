import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Read3Component } from './read3.component';

describe('Read3Component', () => {
  let component: Read3Component;
  let fixture: ComponentFixture<Read3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Read3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Read3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
