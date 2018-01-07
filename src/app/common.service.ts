import { Injectable } from '@angular/core';
import {ProjectData} from "./enterdata/project-data.model";
import {LocalStorageService} from "angular-web-storage";

@Injectable()
export class CommonService {
  entries: ProjectData[] = [];
  KEY = 'entries';

  constructor(private localStorage: LocalStorageService) {
  }

  addEntry(entryData: ProjectData) {
    //TODO: validate if same day && project already exists
    console.log(entryData);
    this.entries.push(entryData);
    console.log(this.entries);
    this.localStorage.set(this.KEY, this.entries);
    console.log('Storage:', this.localStorage.get(this.KEY));
  }

}
