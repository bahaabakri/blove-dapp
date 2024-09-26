import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestTabsComponent } from './invest-tabs.component';

describe('InvestTabsComponent', () => {
  let component: InvestTabsComponent;
  let fixture: ComponentFixture<InvestTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
