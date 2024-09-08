import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent  implements OnInit {
  @Input() hasHeader:boolean = false;
  @Input() hasFooter:boolean = false;

  @Input() createdAt:string = "25/12/2020";
  @Input() updatedAt:string = "26/12/2020";
  @Input() status:string= "hold";
  @Input() notes:string= "No Notes";
  @Input() value:string= "No Value";
  constructor(private router: Router) { }

  ngOnInit() {}


  goToTasks() {
    this.router.navigate(['tasks']);
  }

}
