import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas7Component } from './canvas7.component';

describe('Canvas7Component', () => {
  let component: Canvas7Component;
  let fixture: ComponentFixture<Canvas7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canvas7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
