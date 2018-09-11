import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { ScrollDirective } from './directive/scroll-directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class ShareModule {}
