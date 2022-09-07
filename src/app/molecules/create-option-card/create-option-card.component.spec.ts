import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOptionCardComponent } from './create-option-card.component';

describe('CreateOptionCardComponent', () => {
  let component: CreateOptionCardComponent;
  let fixture: ComponentFixture<CreateOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOptionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
