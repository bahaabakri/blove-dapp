import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCardComponent } from './invest-card.component';

describe('InvestCardComponent', () => {
  let component: InvestCardComponent;
  let fixture: ComponentFixture<InvestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
