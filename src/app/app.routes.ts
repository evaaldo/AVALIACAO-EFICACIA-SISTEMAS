import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];
