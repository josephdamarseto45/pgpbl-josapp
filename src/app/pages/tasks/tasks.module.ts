import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskCardComponent } from 'src/app/components/task-card/task-card.component';
import { HomePage } from '../home/home.page';
import { HomePageModule } from '../home/home.module';
import { TaskCardModule } from 'src/app/components/task-card/task-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    TaskCardModule
  ],
  declarations: [TasksPage],

})
export class TasksPageModule {}
