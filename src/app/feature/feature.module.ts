import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    HomeModule,
    ShareModule
  ]
})

export class FeatureModule {}
