import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoostModalComponent } from './home-boost-modal.component';

describe('HomeBoostModalComponent', () => {
  let component: HomeBoostModalComponent;
  let fixture: ComponentFixture<HomeBoostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBoostModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBoostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
