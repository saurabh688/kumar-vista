import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  allFlatData = [{ flatNumber: '1001', buyerName: 'Ram', dateOfBooking: '20/05/2020' },
  { flatNumber: '1001', buyerName: 'Ram', dateOfBooking: '20/05/2020' },
  { flatNumber: '1001', buyerName: 'Ram', dateOfBooking: '20/05/2020' }];

  addFlatFormGroup: FormGroup;
  addFlatFlag = false;
  constructor(private fb: FormBuilder, public router: Router) {
    this.addFlatFormGroup = this.fb.group({
      'flatNumber': [null],
      'buyerName': [null],
      'dateOfBooking': [null],
      'basicCost': [null],
      'gst': [null],
      'registrationCost': [null],
      'maintenanceCost': [null],
      'otherCost': [null],
      'remaks': [null]
    })
  }


  ngOnInit() {
  }

  getTotalCost() {
    return (this.addFlatFormGroup.value.basicCost + this.addFlatFormGroup.value.gst +
      this.addFlatFormGroup.value.registrationCost + this.addFlatFormGroup.value.maintenanceCost +
      this.addFlatFormGroup.value.otherCost);
  }

  showFlatModel() {
    this.addFlatFlag = true;
  }

  addNewFlat(data) {
    if (data == 'add') {
      this.addFlatFlag = false;
    }
    if (data == 'cancel') {
      this.addFlatFlag = false;
    }
  }

  viewFlatDetails(index) {
    this.router.navigate(['dashboard/flatDetails']);

  }

}
