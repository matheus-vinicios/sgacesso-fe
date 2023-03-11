import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';
import { AutenticacaoGuard } from './guard';

const routes: Routes =
[
  {
    path: 'pagina',
    component: LayoutContentComponent,
    canActivate: [ AutenticacaoGuard ],
    loadChildren: () => import( './page' ).then( m => m.PageModule )
  }
];

@NgModule
(
  {
    imports:
    [
      RouterModule.forRoot(routes)
    ],
    exports:
    [
      RouterModule
    ]
  }
)
export class AppRoutingModule
{

}