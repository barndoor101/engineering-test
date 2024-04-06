import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcsAddComponent } from './parcs-add.component';

describe('ParcsAddComponent', () => {
  let component: ParcsAddComponent;
  let fixture: ComponentFixture<ParcsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
