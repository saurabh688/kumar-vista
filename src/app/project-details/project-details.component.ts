import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId;
  allFlatData = [];

  addFlatFormGroup: FormGroup;
  addFlatFlag = false;
  constructor(private fb: FormBuilder, public router: Router,
    private activatedRoute: ActivatedRoute, public appService: AppService) {
    let param = activatedRoute.snapshot.params['projectId'];
    this.projectId = JSON.parse(window.atob(param));

    this.addFlatFormGroup = this.fb.group({
      'projectId': [null],
      'flatNumber': [null],
      'buyerName': [null],
      'dateOfBooking': [null],
      'basicCost': [null],
      'gst': [null],
      'registrationCost': [null],
      'maintenanceCost': [null],
      'otherCost': [null],
      'totalCost': [null],
      'remarks': [null]
    });

    this.retriveFlatDetails();
  }


  ngOnInit() {
  }

  retriveFlatDetails() {
    this.allFlatData = [];
    var data = {
      "tableName": "flatdetails",
      "moduleName": "ProjectDetailsComponent",
      "moduleInfo": "retriveFlatDetails",
      "retrieveKey": { "projectId": this.projectId }
    }

    this.appService.retrieveByKey(data).subscribe((res) => {
      console.log('resp' + JSON.stringify(res));
      if (res.data.length > 0) {
        this.allFlatData = res.data;
      }
    })

  }

  getTotalCost() {
    this.addFlatFormGroup.controls['totalCost'].setValue((this.addFlatFormGroup.value.basicCost + this.addFlatFormGroup.value.gst +
      this.addFlatFormGroup.value.registrationCost + this.addFlatFormGroup.value.maintenanceCost +
      this.addFlatFormGroup.value.otherCost));

    return this.addFlatFormGroup.controls['totalCost'].value;
  }

  showFlatModel() {
    this.addFlatFlag = true;
  }

  addNewFlat(data) {
    if (data == 'add') {
      this.addFlatFormGroup.controls['projectId'].setValue(this.projectId);
      let data = {
        "tableName": 'flatdetails',
        "moduleName": 'addNewFlat',
        "moduleInfo": 'ProjectDetailsComponent',
        "createData": [Object.assign(this.addFlatFormGroup.value,
          {
            "updatedBy": "saurabh",
            "createdBy": "saurabh"
          })
        ]
      };
      this.appService.createData(data).subscribe((res) => {
        this.retriveFlatDetails();
        this.addFlatFlag = false;
      })
    }
    if (data == 'cancel') {
      this.addFlatFlag = false;
    }
  }

  viewFlatDetails(data) {
    console.log('dataaa' + JSON.stringify(data));
    var projectId = window.btoa(data.projectId);
    var flatId = window.btoa(data.id);
    this.router.navigate(['dashboard/flatDetails/' + projectId + '/' + flatId]);
  }
}
