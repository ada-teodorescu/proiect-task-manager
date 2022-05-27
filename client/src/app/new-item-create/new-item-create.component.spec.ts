import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemCreateComponent } from './new-item-create.component';

describe('NewItemCreateComponent', () => {
  let component: NewItemCreateComponent;
  let fixture: ComponentFixture<NewItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
