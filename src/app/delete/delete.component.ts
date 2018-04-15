import { DataServiceService } from './../data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  data = [];
  constructor(private route: Router, private aRoute: ActivatedRoute, private ds: DataServiceService) {
    aRoute.params.subscribe(res => {
      let index = this.ds.data[res.did];
     let toRemove = this.ds.data.indexOf(index);

    this.ds.data.splice(toRemove, 1);
    console.log("index "+index);
    console.log("res id "+res.did);
    console.log("to remove "+toRemove);
       this.route.navigate(['']);
     });
  }

  ngOnInit() {
  }

}
