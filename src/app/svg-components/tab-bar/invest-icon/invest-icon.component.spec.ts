import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestIconComponent } from './invest-icon.component';

describe('InvestIconComponent', () => {
  let component: InvestIconComponent;
  let fixture: ComponentFixture<InvestIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
