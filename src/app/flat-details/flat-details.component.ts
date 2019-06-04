import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss']
})
export class FlatDetailsComponent implements OnInit {
  viewPaidDetails = true;
  modeList = [{ name: 'Check', value: 'check' }, { name: 'Cash', value: 'cash' }]
  detailsList = [{name: 'Raj', mode: 'check', receivedDate: '20/05/2019',
                  amount: 1000, checkNo: '100000013213', checkDate: '22/05/2019',
                  bankName: 'SBI', depositedBankName: 'Axis'}];
  dateType = "text";
  editList = 'view';
  constructor() { }

  ngOnInit() {
  }

  print() {

  }

  AddItem() {
    this.detailsList.push({name: null, mode: null, receivedDate: null,
    amount: null, checkNo: null, checkDate: null,
    bankName: null, depositedBankName: null});
  }
  changeDateType() {
    this.dateType = 'date';
  }

  saveEditScreen() {
    this.editList = 'view';
  }

  deleteItem(index) {
    this.detailsList.splice(index,1);
  }

}
