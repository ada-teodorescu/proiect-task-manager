import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOverviewMenuComponent } from './task-overview-menu.component';

describe('TaskOverviewMenuComponent', () => {
  let component: TaskOverviewMenuComponent;
  let fixture: ComponentFixture<TaskOverviewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskOverviewMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOverviewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
