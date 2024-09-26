import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoostItemComponent } from './home-boost-item.component';

describe('HomeBoostItemComponent', () => {
  let component: HomeBoostItemComponent;
  let fixture: ComponentFixture<HomeBoostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBoostItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBoostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
