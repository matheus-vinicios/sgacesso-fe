
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { KeycloakService } from 'keycloak-angular';

@Injectable
(
  {
    providedIn: 'root'
  }
)
export class AutenticacaoGuard extends KeycloakAuthGuard
{
  constructor
  (
    protected override readonly router: Router,
    protected readonly keycloakService: KeycloakService
  )
  {
    super(router, keycloakService);
  }

  public async isAccessAllowed
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )
  {
    if (!this.authenticated)
    {
      await this.keycloakService.login({ redirectUri: window.location.origin + state.url });
    }

    const roles = route.data['roles'];

    if (!(roles instanceof Array) || roles.length === 0)
    {
      return true;
    }

    return roles.every((role) => this.roles.includes(role));
  }
}