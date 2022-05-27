import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOverviewTaskComponent } from './team-overview-task.component';

describe('TeamOverviewTaskComponent', () => {
  let component: TeamOverviewTaskComponent;
  let fixture: ComponentFixture<TeamOverviewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamOverviewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOverviewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
