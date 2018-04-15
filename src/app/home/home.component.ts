import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  cohorts = 0;
  id = 0;
  constructor(private route: Router, private ds: DataServiceService, private aRoute: ActivatedRoute) {
    this.data = this.ds.data;
    this.cohorts = this.ds.data.length;
    if (this.ds.data.length > 0){
    this.cohorts = this.ds.data.length;
    }

   }

  ngOnInit() {
  }

  addnew(): void {
    this.route.navigate(['add']);
  }

  delete(id): void {
    console.log(id);
  }

}
