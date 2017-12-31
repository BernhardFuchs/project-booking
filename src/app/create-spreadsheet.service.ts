import { Injectable } from '@angular/core';
import {EntryData} from "./enterdata/entry-data.model";

@Injectable()
export class CreateSpreadsheetService {
  entries: EntryData[] = [];

  constructor() { }

  addEntry(entryData: EntryData) {
    //TODO: validate if same day && project already exists
    console.log(entryData);
    this.entries.push(entryData);
    console.log(this.entries);
  }

}
