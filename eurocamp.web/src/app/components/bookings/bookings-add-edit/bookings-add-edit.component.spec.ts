import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsAddEditComponent } from './bookings-add-edit.component';

describe('BookingsAddEditComponent', () => {
  let component: BookingsAddEditComponent;
  let fixture: ComponentFixture<BookingsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
