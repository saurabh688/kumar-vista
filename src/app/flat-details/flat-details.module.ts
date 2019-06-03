import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../sharedmodule/shared.module';
import { FlatDetailsComponent } from './flat-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FlatDetailsComponent}
];

@NgModule({
  declarations: [
    FlatDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FlatDetailsModule { }
