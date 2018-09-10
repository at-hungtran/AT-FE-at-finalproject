import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ScrollDirective } from '../../share/directive/scroll-directive';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})

export class HomeModule {}
