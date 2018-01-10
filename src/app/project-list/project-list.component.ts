import {Component, OnInit} from '@angular/core';
import {CommonService} from "../common.service";
import {ProjectData} from "../project-data/project-data.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  inputs: []
})
export class ProjectListComponent implements OnInit {

  entries: ProjectData[] = [];

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {

  }

  fetchEntries() {
    console.log('Fetching Data');
    this.entries = this.commonService.fetchEntries();
    console.log(this.entries);
  }

  removeEntry(index) {
    this.commonService.removeItem(index);
    this.fetchEntries();
  }

}
