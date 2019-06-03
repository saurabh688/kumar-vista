import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allProjectsData = [{ name: 'Kumar Vista', startDate: '20/05/2019', completionDate: '20/05/2020' }];
  newProjectFormGroup: FormGroup;
  showAddProjectDashboard = false;
  constructor(private fb: FormBuilder, public router: Router) {
    this.newProjectFormGroup = this.fb.group({
      'newProjectName': [null],
      'startDate': [null],
      'completionDate': [null]
    })
  }


  ngOnInit() {
  }

  showAddProjectModel() {
    this.showAddProjectDashboard = true;
  }

  addNewProject(data) {
    if (data == 'add') {
      this.showAddProjectDashboard = false;
    }
    if (data == 'cancel') {
      this.showAddProjectDashboard = false;
    }
  }

  projectDetails(index) {
    this.router.navigate(['dashboard/projectDetails']);
  }

}
