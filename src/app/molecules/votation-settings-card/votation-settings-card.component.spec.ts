import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationSettingsCardComponent } from './votation-settings-card.component';

describe('VotationSettingsCardComponent', () => {
  let component: VotationSettingsCardComponent;
  let fixture: ComponentFixture<VotationSettingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotationSettingsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotationSettingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
