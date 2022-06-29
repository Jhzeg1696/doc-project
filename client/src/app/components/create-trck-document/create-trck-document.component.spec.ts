import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrckDocumentComponent } from './create-trck-document.component';

describe('CreateTrckDocumentComponent', () => {
  let component: CreateTrckDocumentComponent;
  let fixture: ComponentFixture<CreateTrckDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrckDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrckDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
