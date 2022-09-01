import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationCardComponent } from './votation-card.component';

describe('VotationCardComponent', () => {
  let component: VotationCardComponent;
  let fixture: ComponentFixture<VotationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
