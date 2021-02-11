import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';

const routes: Routes = [
  {path: '', component: ProjectDetailsComponent}
];

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProjectDetailsModule { }
