import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaGameComponent } from './trivia-game.component';

describe('TriviaGameComponent', () => {
  let component: TriviaGameComponent;
  let fixture: ComponentFixture<TriviaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviaGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriviaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
