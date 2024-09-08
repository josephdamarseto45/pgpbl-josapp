import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToTasks() {
    this.router.navigate(['tasks']);
  }

  addTask() {
    this.router.navigate(['task']);
  }

  



}
