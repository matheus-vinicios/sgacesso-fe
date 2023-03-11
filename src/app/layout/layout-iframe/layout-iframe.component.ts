import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component
(
  {
    selector: 'wp-layout-iframe',
    templateUrl: './layout-iframe.component.html'
  }
)
export class LayoutIframeComponent
{
  public readonly iframe: SafeResourceUrl | undefined;

  constructor
  (
    private domSanitizer: DomSanitizer
  )
  {
    //this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://gentile.dev/');
  }
}