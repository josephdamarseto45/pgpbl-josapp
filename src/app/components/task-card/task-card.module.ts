import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { TaskCardComponent } from './task-card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule to the imports array
  ],
  exports: [TaskCardComponent],
  declarations: [TaskCardComponent]
})
export class TaskCardModule {}
