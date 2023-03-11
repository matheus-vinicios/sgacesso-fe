import { APP_INITIALIZER } from '@angular/core';
import { NgModule } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule } from 'keycloak-angular';
import { KeycloakService } from 'keycloak-angular';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
//import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
//import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { keycloakInitializer } from './app.initializer';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';
import { LayoutIframeComponent } from './layout/layout-iframe/layout-iframe.component';

@NgModule
(
  {
    declarations:
    [
      AppComponent,
      TopbarComponent,
      SidebarComponent,
      LayoutContentComponent,
      LayoutIframeComponent
    ],
    imports:
    [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      KeycloakAngularModule,
      SidebarModule,
      ToolbarModule,
      ButtonModule,
      AvatarModule,
      //BadgeModule
      OverlayPanelModule,
      //PanelModule
      ProgressSpinnerModule
    ],
    providers:
    [
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      },
      {
        provide: APP_INITIALIZER,
        useFactory: keycloakInitializer,
        multi: true,
        deps:
        [
          KeycloakService
        ]
      }
    ],
    bootstrap:
    [
      AppComponent
    ]
  }
)
export class AppModule
{

}