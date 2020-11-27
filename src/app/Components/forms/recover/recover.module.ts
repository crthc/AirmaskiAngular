import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverRoutingModule } from './recover-routing.module';
import { RecoverComponent } from './recover.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecoverComponent],
  imports: [
    CommonModule,
    RecoverRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecoverModule { }
