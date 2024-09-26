import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesActionsComponent } from './games-actions.component';

describe('GamesActionsComponent', () => {
  let component: GamesActionsComponent;
  let fixture: ComponentFixture<GamesActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
