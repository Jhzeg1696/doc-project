import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas8Component } from './canvas8.component';

describe('Canvas8Component', () => {
  let component: Canvas8Component;
  let fixture: ComponentFixture<Canvas8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canvas8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
