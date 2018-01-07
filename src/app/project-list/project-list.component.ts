import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from "../common.service";
import {ProjectData} from "../enterdata/project-data.model";

@Component({
  selector: 'app-display-bookings',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [CommonService],
  inputs: []
})
export class ProjectList implements OnInit {

  @Input() parentEntry: ProjectData;
  entries: ProjectData[] = [];

  constructor(private commonService: CommonService) {
    console.log('Cosntructor');
    /*commonService.getEntries().subscribe(
      entry => {
        console.log(entry);
        this.entries.push(entry);
      }
    )*/
  }

  ngOnInit() {
  }

}
