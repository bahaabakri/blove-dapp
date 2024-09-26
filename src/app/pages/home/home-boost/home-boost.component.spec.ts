import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoostComponent } from './home-boost.component';

describe('HomeBoostComponent', () => {
  let component: HomeBoostComponent;
  let fixture: ComponentFixture<HomeBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBoostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
