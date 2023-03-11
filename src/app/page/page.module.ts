import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { InicialComponent } from './inicial/inicial.component';

@NgModule
(
  {
    declarations:
    [  
      InicialComponent
    ],
    imports:
    [
      CommonModule,
      PageRoutingModule
    ]
  }
)
export class PageModule
{

}