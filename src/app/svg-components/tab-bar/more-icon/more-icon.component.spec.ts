import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIconComponent } from './more-icon.component';

describe('MoreIconComponent', () => {
  let component: MoreIconComponent;
  let fixture: ComponentFixture<MoreIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
