import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HealthCheckComponent } from './components/health-check/health-check.component';
import { GoogleCampaingComponent } from './components/google-campaing/google-campaing.component';
import { CampaingAbstractComponent } from './components/campaing-abstract/campaing-abstract.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "statistics",
        component: StatisticsComponent
      },
      {
        path: "health_check",
        component: HealthCheckComponent
      },
      {
        path: "google_campaing",
        component: GoogleCampaingComponent
      },
      {
        path: "campaing_abstract",
        component: CampaingAbstractComponent
      }
    ]/*  */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
