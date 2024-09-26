import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainModalComponent } from './main-modal.component';

describe('MainModalComponent', () => {
  let component: MainModalComponent;
  let fixture: ComponentFixture<MainModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
