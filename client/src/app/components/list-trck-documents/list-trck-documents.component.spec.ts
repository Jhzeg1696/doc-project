import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrckDocumentsComponent } from './list-trck-documents.component';

describe('ListTrckDocumentsComponent', () => {
  let component: ListTrckDocumentsComponent;
  let fixture: ComponentFixture<ListTrckDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrckDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrckDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
