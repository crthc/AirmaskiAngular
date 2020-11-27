import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaskRoutingModule } from './mask-routing.module';
import { MaskComponent } from './mask.component';


@NgModule({
  declarations: [MaskComponent],
  imports: [
    CommonModule,
    MaskRoutingModule
  ]
})
export class MaskModule { }
