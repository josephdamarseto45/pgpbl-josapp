import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule to the imports array
  ],
  exports: [ErrorMessageComponent],
  declarations: [ErrorMessageComponent]
})
export class ErrorMessageModule {}
