import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: 'dashboard', component: LayoutComponent, children: [
      { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'projectDetails', loadChildren: './project-details/project-details.module#ProjectDetailsModule' },
      { path: 'flatDetails', loadChildren: './flat-details/flat-details.module#FlatDetailsModule' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
