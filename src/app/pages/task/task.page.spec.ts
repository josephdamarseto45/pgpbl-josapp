import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskPage } from './task.page';
import { Router } from '@angular/router';

describe('TaskPage', () => {
  let component: TaskPage;
  let fixture: ComponentFixture<TaskPage>;
  let router:Router;
  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should go to home', () => {
    spyOn(router, 'navigate');
    component.chooseTask();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
