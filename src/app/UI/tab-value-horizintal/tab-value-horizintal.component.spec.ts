import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabValueHorizintalComponent } from './tab-value-horizintal.component';

describe('TabValueHorizintalComponent', () => {
  let component: TabValueHorizintalComponent;
  let fixture: ComponentFixture<TabValueHorizintalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabValueHorizintalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabValueHorizintalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
