import { Component, OnInit } from '@angular/core';
import { Entry } from 'app/enterdata/entry.model';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.css']
})
export class EnterdataComponent implements OnInit {

  entryForm: FormGroup;

  entries: Entry[] = [
    //new Entry(2, 12, 'Project b')
  ];

  projects: string[] = [
    'Project A',
    'Project B'
  ];

  constructor() { }

  ngOnInit() {
    this.entryForm = new FormGroup({
      day: new FormControl(),
      hours: new FormControl(),
      project: new FormControl()
    });
  }

  submitEntry(entryForm) {
    /*console.log('submit received!!!');
    this.entries.push(this.currentRow);
    console.log(this.currentRow);
    console.log(this.entries);
    this.currentRow = new Entry(0, 0, "");*/
  }
}
