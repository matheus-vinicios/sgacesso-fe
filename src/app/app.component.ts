import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

@Component
(
  {
    selector: 'wp-root',
    template: '<router-outlet></router-outlet>'
  }
)
export class AppComponent implements OnInit
{
  public authenticated: boolean = false;
  //public readonly iframeUrl: SafeResourceUrl | undefined;

  constructor
  (
    private readonly keycloakService: KeycloakService,
    private router: Router
    //private domSanitizer: DomSanitizer
  )
  {
    //this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://gentile.dev/');
  }

  async ngOnInit(): Promise<void>
  {
    this.authenticated = await this.keycloakService.isLoggedIn();
    
    if (!this.authenticated)
      await this.keycloakService.login({ redirectUri: window.location.origin });

    this.router.navigate(['/pagina/inicial']);
  }
}