import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInvitesComponent } from './profile-invites.component';

describe('ProfileInvitesComponent', () => {
  let component: ProfileInvitesComponent;
  let fixture: ComponentFixture<ProfileInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInvitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
