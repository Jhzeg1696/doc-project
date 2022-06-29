import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas4Component } from './canvas4.component';

describe('Canvas4Component', () => {
  let component: Canvas4Component;
  let fixture: ComponentFixture<Canvas4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canvas4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
