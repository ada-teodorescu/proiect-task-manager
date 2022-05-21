import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOverviewMenuComponent } from './team-overview-menu.component';

describe('TeamOverviewMenuComponent', () => {
  let component: TeamOverviewMenuComponent;
  let fixture: ComponentFixture<TeamOverviewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamOverviewMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOverviewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
