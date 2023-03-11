import { Component } from '@angular/core';

@Component
(
  {
    selector: 'wp-sidebar',
    templateUrl: './sidebar.component.html'
  }
)
export class SidebarComponent
{
  public menu: boolean = false;
}