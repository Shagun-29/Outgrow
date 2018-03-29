import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveContentComponent } from './interactive-content.component';

describe('InteractiveContentComponent', () => {
  let component: InteractiveContentComponent;
  let fixture: ComponentFixture<InteractiveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
