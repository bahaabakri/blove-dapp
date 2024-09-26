import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFrameBackComponent } from './tab-frame-back.component';

describe('TabFrameBackComponent', () => {
  let component: TabFrameBackComponent;
  let fixture: ComponentFixture<TabFrameBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabFrameBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabFrameBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
