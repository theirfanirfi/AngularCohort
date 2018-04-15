import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  title: string;
  course_id = 0;
  startDate: string;
  endDate: string;
  trainer: string;
  myobj = JSON;
  cohorts = 0;
  superObj = [];
  constructor(private route: Router, private ds: DataServiceService) {

    this.cohorts = this.ds.data.length;
  }

  ngOnInit() {
  }

  navToHome(): void {
    this.route.navigate(['']);
  }
  gettitle(e): void {
    this.title =  e.target.value;
  }

  getCouseId(e): void {
      this.course_id = e.target.value;
  }

  getStartDate(e): void {
    this.startDate = e.target.value;
  }

  getEndDate(e): void {
    this.endDate = e.target.value;
  }
  getTrainer(e): void {
    this.trainer = e.target.value;
  }

  submitForm(): void {
    const myob = {
      course_id : this.course_id,
      title: this.title,
      startDate: this.startDate,
      endDate: this.endDate,
      trainer: this.trainer,
      index: this.ds.data.length
    };

   this.myobj =  JSON.parse(JSON.stringify(myob));
    this.superObj.push(this.myobj);
    this.ds.data.push(this.myobj);
    //alert(this.superObj);
   // console.log(this.ds.data);

  }

}
