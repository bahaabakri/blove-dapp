import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestStatisticsComponent } from './invest-statistics.component';

describe('InvestStatisticsComponent', () => {
  let component: InvestStatisticsComponent;
  let fixture: ComponentFixture<InvestStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
