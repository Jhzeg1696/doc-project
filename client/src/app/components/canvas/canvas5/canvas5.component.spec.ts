import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas5Component } from './canvas5.component';

describe('Canvas5Component', () => {
  let component: Canvas5Component;
  let fixture: ComponentFixture<Canvas5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canvas5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
