import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVectorComponent } from './tab-vector.component';

describe('TabVectorComponent', () => {
  let component: TabVectorComponent;
  let fixture: ComponentFixture<TabVectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabVectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
