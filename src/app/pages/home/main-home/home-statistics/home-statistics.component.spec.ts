import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatisticsComponent } from './home-statistics.component';

describe('HomeStatisticsComponent', () => {
  let component: HomeStatisticsComponent;
  let fixture: ComponentFixture<HomeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
