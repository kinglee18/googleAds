import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import localeMX from '@angular/common/locales/es-MX';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HealthCheckComponent } from './components/health-check/health-check.component';
import { GoogleCampaingComponent } from './components/google-campaing/google-campaing.component';
import { CustomMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/campaing-stepts/account/account.component';
import { CampaingComponent } from './components/campaing-stepts/campaing/campaing.component';
import { GroupsComponent } from './components/campaing-stepts/groups/groups.component';
import { AnnouncementsComponent } from './components/campaing-stepts/announcements/announcements.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeMX, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StatisticsComponent,
    HealthCheckComponent,
    GoogleCampaingComponent,
    AccountComponent,
    CampaingComponent,
    GroupsComponent,
    AnnouncementsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,

    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
