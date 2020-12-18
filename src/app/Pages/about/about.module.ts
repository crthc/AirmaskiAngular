import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LazyImageModule } from 'ng-lazy-image';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LazyLoadImageModule,
    LazyImageModule
  ]
})
export class AboutModule { }
