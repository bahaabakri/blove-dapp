import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatisticCardComponent } from './profile-statistic-card.component';

describe('ProfileStatisticCardComponent', () => {
  let component: ProfileStatisticCardComponent;
  let fixture: ComponentFixture<ProfileStatisticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileStatisticCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileStatisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
