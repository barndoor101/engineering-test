import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsAddComponent } from './bookings-add.component';

describe('BookingsAddComponent', () => {
  let component: BookingsAddComponent;
  let fixture: ComponentFixture<BookingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
