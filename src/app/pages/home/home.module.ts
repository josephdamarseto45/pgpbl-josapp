import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TaskCardComponent } from 'src/app/components/task-card/task-card.component';
import { TaskCardModule } from 'src/app/components/task-card/task-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TaskCardModule
  ],
  declarations: [HomePage]
  // exports: [TaskCardComponent]
})
export class HomePageModule {}
