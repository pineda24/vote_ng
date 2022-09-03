import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVotationComponent } from './create-votation.component';

describe('CreateVotationComponent', () => {
  let component: CreateVotationComponent;
  let fixture: ComponentFixture<CreateVotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
