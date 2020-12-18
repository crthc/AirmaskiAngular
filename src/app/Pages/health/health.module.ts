import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyImageModule } from 'ng-lazy-image';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    HealthRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    LazyLoadImageModule,
    LazyImageModule
  ]
})
export class HealthModule { }
