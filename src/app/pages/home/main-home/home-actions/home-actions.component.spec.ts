import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActionsComponent } from './home-actions.component';

describe('HomeActionsComponent', () => {
  let component: HomeActionsComponent;
  let fixture: ComponentFixture<HomeActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
