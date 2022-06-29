import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas6Component } from './canvas6.component';

describe('Canvas6Component', () => {
  let component: Canvas6Component;
  let fixture: ComponentFixture<Canvas6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canvas6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
