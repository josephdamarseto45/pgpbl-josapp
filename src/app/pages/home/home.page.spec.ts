import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should go to tasks', () => {
    spyOn(router, 'navigate');
    component.goToTasks();
    expect(router.navigate).toHaveBeenCalledWith(['tasks']);
  });
  it('should go to task', () => {
    spyOn(router, 'navigate');
    component.addTask();
    expect(router.navigate).toHaveBeenCalledWith(['task']);
  });
});
