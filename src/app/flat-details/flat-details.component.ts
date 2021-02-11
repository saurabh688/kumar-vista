import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss']
})
export class FlatDetailsComponent implements OnInit {
  projectId;
  flatId;
  generalInfo;
  viewPaidDetails = true;
  modeList = [{ name: 'Check', value: 'check' }, { name: 'Cash', value: 'cash' }]
  detailsList = [];
  dateType = "text";
  editList = 'view';
  constructor(public activatedRoute: ActivatedRoute, public appService: AppService) {
    let projectId = activatedRoute.snapshot.params['projectId'];
    let flatId = activatedRoute.snapshot.params['flatId'];
    this.projectId = JSON.parse(window.atob(projectId));
    this.flatId = JSON.parse(window.atob(flatId));

    this.retriveFlatDetails();

  }

  ngOnInit() {
  }

  retriveFlatDetails() {
    var retriveGeneralInfo = {
      "tableName": " flatdetails",
      "retrieveKey": { "id": this.flatId },
      "condition1": "projectId",
      "condition2": this.projectId
    };

    this.appService.retrieveByMultipleCondition(retriveGeneralInfo).subscribe((res) => {
      console.log('ress ' + JSON.stringify(res));
      if (res.data.length > 0) {
        this.generalInfo = res.data[0];
      }
    })
    var retrivePaymentInfo = {
      "tableName": " paymentdetails",
      "retrieveKey": { "flatId": this.flatId },
      "condition1": "projectId",
      "condition2": this.projectId
    };

    this.appService.retrieveByMultipleCondition(retrivePaymentInfo).subscribe((res) => {
      console.log('ressulttt ' + JSON.stringify(res));
      if (res.data.length > 0) {
        this.detailsList = res.data;
      }
    })
  }

  print(data) {
    var printContents = document.getElementById(data).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.focus();
    window.close();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  AddItem() {
    this.editList = '';
    this.detailsList.push({
      'projectId': this.projectId, 'flatId': this.flatId,
      'buyerName': null, 'paymentMode': null, 'checkReceivedDate': null, 'amount': null,
      'checkNumber': null, 'checkDate': null, 'bankName': null, 'depositedBankName': null, 'paymentStatus': null
    })
  }
  changeDateType() {
    this.dateType = 'date';
  }

  saveEditScreen() {
    this.detailsList.forEach((item)=>{
      console.log("item.id",item.id);
      if(item.id == undefined || item.id == null ){
        let data = {
          "tableName": 'paymentdetails',
          "moduleName": 'saveEditScreen',
          "moduleInfo": 'FlatDetailsComponent',
          "createData": [Object.assign(item,
            {
              "updatedBy": "saurabh",
              "createdBy": "saurabh"
            })
          ]
        };
        this.appService.createData(data).subscribe((res) => {
          console.log("output  " + JSON.stringify(res));
          item['id']=res.data[0];
          this.editList = 'view';
        })
      }
      else{}
    })
  }

  deleteItem(item,index) {
    if(item.id == undefined || item.id == null ){
    this.detailsList.splice(index, 1);
    }
    else {
        var deleteData = {
      "tableName": "paymentdetails",
      "deleteKey": item.id,
      "moduleName": 'deleteItem',
      "moduleInfo": 'FlatDetailsComponent'
  }
      this.appService.deleteData(deleteData).subscribe((res) => {
        console.log('delete ' + JSON.stringify(res));
        this.detailsList.splice(index, 1);
      })
    }

  }

  getAmountPaid(){
    let totalAmountPaid = 0;
    this.detailsList.forEach(item=>{
      console.log('tieee',item.amount)
      totalAmountPaid = Number(totalAmountPaid+item.amount);
    })
    return totalAmountPaid;
  }

  getDueAmount(){
    return Number(this.generalInfo.totalCost-this.getAmountPaid());
  }

}
