import { Routes } from '@angular/router';
import { LandingPageComponent } from './feature/landin-page/landin-page.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { HeroComponent } from './feature/configuration/views/hero/hero.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'configuration/create',
    component: HeroComponent,
  },
  {
    path: 'configuration/edit/:id',
    component: HeroComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
