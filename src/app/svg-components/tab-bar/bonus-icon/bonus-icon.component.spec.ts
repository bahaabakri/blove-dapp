import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusIconComponent } from './bonus-icon.component';

describe('BonusIconComponent', () => {
  let component: BonusIconComponent;
  let fixture: ComponentFixture<BonusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
