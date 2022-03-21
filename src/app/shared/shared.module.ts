import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { FormErrorComponent } from './form-error/form-error.component';



@NgModule({
  declarations: [
    FormErrorComponent,
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    FormErrorComponent,
  ]
})
export class SharedModule { }
