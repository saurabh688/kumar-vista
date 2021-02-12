import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'charset': 'UTF-8'
  });
  constructor(private http: HttpClient) { }

  createData(data): Observable<any> {
    return this.http.post('https://troxserver.azurewebsites.net/api/mysqlDb/createData', data).pipe(response => {
      return response;
    });

    // var createData = {
    //   "tableName": 'liccommitteeinspection',
    //   "moduleName": 'creationofSelfinspectioncommittee',
    //   "moduleInfo": 'insertInspectionCommitteeRecord',
    //   "createData": [masterData]
    // };

  }

  // updateData(data) {
  //   this.http.put('http://localhost:4200/api/mysqlDb/updateData',data).subscribe(response=>{
  //     return response;
  // });
  // // var updatedData = {
  // //   "tableName": 'liccommitteeinspection',
  // //   "moduleName": 'saveCommitteeReviewToDb',
  // //   "moduleInfo": 'updateCommitteeReviewTodb',
  // //   "updateKey": { "inspectionId": this.idOfInspectionProgress },
  // //   "condition": studentRankData
  // // }

  // // var params = {
  // //   "tableName": "liccommittee",
  // //   "updateKey": { "memberId": res.data[0].memberId },
  // //   "condition": {
  // //     "committeeName": this.valForm.controls['committeeName'].value,
  // //     "supervisorId": this.supervisorId,
  // //     "supervisorName": this.supervisorName
  // //   }
  // // }


  // }

  // updateDataByMultipleCondition(data) {
  //   this.http.put('http://localhost:4200/api/mysqlDb/updateDataByMultipleCondition',data).subscribe(response=>{
  //     return response;
  // });

  // // var updatedData = {
  // //   "tableName": "licremarks",
  // //   "moduleName": 'licremarks',
  // //   "moduleInfo": "licremarks",
  // //   "updateKey": { "inspectionId": this.inspectionProgressId.id },
  // //   "condition": params,
  // //   "condition1": "section",
  // //   "condition2": type
  // // }
  // }

  // retrieveAll(retrive): Observable<any> {

  //   return this.http.get('http://localhost:4200/api/mysqlDb/retrieveAll', retrive).pipe(response => {
  //     return response;
  //   });

  //   this.http.get('http://localhost:4200/api/mysqlDb/retrieveAll',retrive).subscribe(response=>{
  //     return response;
  // });

  // {
  //   "tableName": "projectlist"
  // }
  // }

  retrieveAll(data): Observable<any> {
    return this.http.post('http://localhost:4200/api/mysqlDb/retrieveAll', data).pipe(response => {
      return response;
    });

  }

  retrieveByKey(retrive): Observable<any>{
    return this.http.post('http://localhost:4200/api/mysqlDb/retrieveByKey',retrive).pipe(response=>{
      return response;
  });
  }

  retrieveByMultipleCondition(retrive): Observable<any>{
    return this.http.post('http://localhost:4200/api/mysqlDb/retrieveByMultipleCondition',retrive).pipe(response=>{
      return response;
  });
  }

  // retrieveByMultipleCondition(retrive){
  //   this.http.get('http://localhost:4200/api/mysqlDb/retrieveByMultipleCondition',retrive).subscribe(response=>{
  //     return response;
  // });

  // // var checkStaus = {
  // //   "tableName": " licinspectionprogress",
  // //   "retrieveKey": { "collegeCode": this.appStateService.globalLoginData.collegeCode },
  // //   "condition1": "inspectionYear", // fieldname
  // //   "condition2": inspectionyear // value
  // // };
  // }

  // retrieveByMultipleConditionDistinct(retrive){
  //   this.http.get('http://localhost:4200/api/mysqlDb/retrieveByMultipleConditionDistinct',retrive).subscribe(response=>{
  //     return response;
  // });

  // // retrivedData = {
  // //   "tableName": "liccoursedetails",
  // //   "moduleName": "liccoursedetails",
  // //   "moduleInfo": "liccoursedetails",
  // //   "retrieveKey": { "inspectionId": inspectionId },
  // //   "condition1": "levelName", //fieldname
  // //   "condition2": courseType,// value
  // //   "distinctName": "streamsName" //distinct field
  // // };
  // }
  deleteData(data): Observable<any>{
    return this.http.post('http://localhost:4200/api/mysqlDb/deleteData',data).pipe(response=>{
      return response;
  });
  }

  // deleteData(data){
  //   this.http.post('http://localhost:4200/api/mysqlDb/deleteData',data).subscribe(response=>{
  //     return response;
  // });

  // // var delcommitteeObservation = {
  // //   "tableName": "liccompliancedetails",
  // //   "deleteKey": item.id,
  // //   "moduleName": 'saveCommitteeObservationToDb',
  // //   "moduleInfo": 'Delete data into liccompliancedetails table'
  // // }
  // }

  // deleteDataByMultipleCondition(data){
  //   this.http.post('http://localhost:4200/api/mysqlDb/deleteByMultipleCondition',data).subscribe(response=>{
  //     return response;
  // });

  // // var delcommitteeObservation = {
  // //   "tableName": "liccompliancedetails",
  // //   "deleteKey": item.id,
  // //   "moduleName": 'saveCommitteeObservationToDb',
  // //   "moduleInfo": 'Delete data into liccompliancedetails table'
  // // }
  // }

}
