import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcsAddEditComponent } from './parcs-add-edit.component';

describe('ParcsAddEditComponent', () => {
  let component: ParcsAddEditComponent;
  let fixture: ComponentFixture<ParcsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcsAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
