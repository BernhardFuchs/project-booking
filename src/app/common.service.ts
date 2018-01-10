import { Injectable } from '@angular/core';
import {ProjectData} from "./project-data/project-data.model";
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
    console.log(this.entries);
    this.entries.push(entryData);
    console.log('add: ');
    console.log(this.entries);
    this.localStorage.set(this.KEY, this.entries);
  }

  fetchEntries(): ProjectData[] {
    return this.localStorage.get(this.KEY);
  }

  removeItem(index: number) {
    let entries = this.localStorage.get(this.KEY);
    entries.splice(index, 1);
    this.entries = entries;
    console.log('remove: ');
    console.log(this.entries);
    this.localStorage.set(this.KEY, entries);
  }
}
