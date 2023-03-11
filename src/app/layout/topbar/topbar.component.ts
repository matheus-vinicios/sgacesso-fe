import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component
(
  {
    selector: 'wp-topbar',
    templateUrl: './topbar.component.html'
  }
)
export class TopbarComponent implements OnInit
{
  //public isLogged = false;
  public keycloakProfile: KeycloakProfile | undefined;

  constructor
  (
    private readonly keycloakService: KeycloakService
  )
  {

  }

  async ngOnInit(): Promise<void>
  {
    //this.isLogged = await this.keycloakService.isLoggedIn();

    //if (this.isLogged)
    //{
      this.keycloakProfile = await this.keycloakService.loadUserProfile();
    //}
  }

  public logout()
  {
    this.keycloakService.logout();
  }
}