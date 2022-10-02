import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAppendOptionCardComponent } from './button-append-option-card.component';

describe('ButtonAppendOptionCardComponent', () => {
  let component: ButtonAppendOptionCardComponent;
  let fixture: ComponentFixture<ButtonAppendOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAppendOptionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAppendOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
