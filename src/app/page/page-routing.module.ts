import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes =
[
  {
    path: 'inicial',
    component: InicialComponent
  }
];

@NgModule
(
  {
    imports:
    [
      RouterModule.forChild(routes)
    ],
    exports:
    [
      RouterModule
    ]
  }
)
export class PageRoutingModule
{

}