import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestBannerComponent } from './invest-banner.component';

describe('InvestBannerComponent', () => {
  let component: InvestBannerComponent;
  let fixture: ComponentFixture<InvestBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
