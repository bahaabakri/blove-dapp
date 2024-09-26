import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarElementComponent } from './tab-bar-element.component';

describe('TabBarElementComponent', () => {
  let component: TabBarElementComponent;
  let fixture: ComponentFixture<TabBarElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabBarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
