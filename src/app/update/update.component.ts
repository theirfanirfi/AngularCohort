import { DataServiceService } from './../data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  cohortId = 0;
  data = {
    'title': '',
    'course_id': 0,
    'startDate': '',
    'endDate': '',
    'trainer': ''
  };
  superObj = [];

  title: string;
  course_id = 0;
  startDate: string;
  endDate: string;
  trainer: string;
  myobj: JSON;
  cohorts = 0;
  constructor(private route: Router, private aRoute: ActivatedRoute, private ds: DataServiceService) {
    if (this.ds.data.length > 0) {
    this.superObj = this.ds.data;
    }


    this.cohorts = this.ds.data.length;

    this.aRoute.params.subscribe(res => {
      this.cohortId = res.id > 0 ? res.id - 1 : 0;
      this.data = this.ds.data[this.cohortId];
      this.title = this.data.title;
      this.course_id = this.data.course_id;
      this.startDate = this.data.startDate;
      this.endDate = this.data.endDate;
      this.trainer = this.data.trainer;


    });
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

    this.ds.data[this.cohortId].title = this.title;
    this.ds.data[this.cohortId].course_id = this.course_id;
    this.ds.data[this.cohortId].startDate = this.startDate;
    this.ds.data[this.cohortId].endDate = this.endDate;
    this.ds.data[this.cohortId].trainer = this.trainer;
    // this.myobj = {
    //   'course_id': this.course_id,
    //   "title": this.title,
    //   "startDate": this.startDate,
    //   "endDate": this.endDate,
    //   "trainer": this.trainer

    // };s
    // this.superObj.push(this.myobj);
    // this.ds.data.push(this.myobj);
    // //alert(this.superObj);
    // console.log(this.ds.data);
  }

}
