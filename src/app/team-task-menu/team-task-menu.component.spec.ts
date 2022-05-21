import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTaskMenuComponent } from './team-task-menu.component';

describe('TeamTaskMenuComponent', () => {
  let component: TeamTaskMenuComponent;
  let fixture: ComponentFixture<TeamTaskMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTaskMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTaskMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
