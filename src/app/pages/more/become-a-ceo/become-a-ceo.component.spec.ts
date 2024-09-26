import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeACeoComponent } from './become-a-ceo.component';

describe('BecomeACeoComponent', () => {
  let component: BecomeACeoComponent;
  let fixture: ComponentFixture<BecomeACeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeACeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeACeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
