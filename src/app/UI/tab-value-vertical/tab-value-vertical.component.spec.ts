import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabValueVerticalComponent } from './tab-value-vertical.component';

describe('TabValueVerticalComponent', () => {
  let component: TabValueVerticalComponent;
  let fixture: ComponentFixture<TabValueVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabValueVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabValueVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
