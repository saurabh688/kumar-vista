import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allProjectsData = [];
  newProjectFormGroup: FormGroup;
  showAddProjectDashboard = false;
  constructor(private fb: FormBuilder, public router: Router, public appService: AppService,
    private http: HttpClient) {
    this.newProjectFormGroup = this.fb.group({
      'projectName': [null],
      'startDate': [null],
      'completionDate': [null]
    })
  }


  ngOnInit() {
    this.retreiveAllProjects();
  }
  retreiveAllProjects() {
    var data = { "tableName": "projectlist" };
    this.appService.retrieveAll(data).subscribe((res) => {
      console.log("output  " + JSON.stringify(res));
      this.allProjectsData = res;
    })
  }

  showAddProjectModel() {
    this.showAddProjectDashboard = true;
  }

  addNewProject(data) {
    if (data == 'add') {
      console.log('data ' + JSON.stringify(this.newProjectFormGroup.value));
      let data = {
        "tableName": 'projectlist',
        "moduleName": 'dashboard',
        "moduleInfo": 'addNewProject',
        "createData": [Object.assign(this.newProjectFormGroup.value,
          {
            "updatedBy": "saurabh",
            "createdBy": "saurabh"
          })
        ]
      };
      this.appService.createData(data).subscribe((res) => {
        this.retreiveAllProjects();
        console.log("output  " +JSON.stringify( res));
        this.showAddProjectDashboard = false;
      })
    }
    if (data == 'cancel') {
      this.showAddProjectDashboard = false;
    }
  }

  projectDetails(data) {
    console.log('data',data)
    var param=window.btoa((data.id));
    console.log('dataid',data.id)
    this.router.navigate(['dashboard/projectDetails',param]);
  }

}
