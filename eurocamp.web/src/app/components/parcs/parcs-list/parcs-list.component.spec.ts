import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcsListComponent } from './parcs-list.component';

describe('ParcsListComponent', () => {
  let component: ParcsListComponent;
  let fixture: ComponentFixture<ParcsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
