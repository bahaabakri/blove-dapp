import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusItemComponent } from './bonus-item.component';

describe('BonusItemComponent', () => {
  let component: BonusItemComponent;
  let fixture: ComponentFixture<BonusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
