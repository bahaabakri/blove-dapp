import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestProjectsComponent } from './invest-projects.component';

describe('InvestProjectsComponent', () => {
  let component: InvestProjectsComponent;
  let fixture: ComponentFixture<InvestProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
