import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LazyImageModule } from 'ng-lazy-image';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LazyImageModule,
    LazyLoadImageModule
  ]
})
export class AboutModule { }
