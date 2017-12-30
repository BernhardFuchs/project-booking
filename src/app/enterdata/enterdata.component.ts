import { Component, OnInit } from '@angular/core';
import { Entry } from 'app/enterdata/entry.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.css']
})
export class EnterdataComponent implements OnInit {

  entryForm: FormGroup;
  day: FormControl;
  hours: FormControl;
  project: FormControl;

  entries: Entry[] = [
    //new Entry(2, 12, 'Project b')
  ];

  projects: string[] = [
    'Project A',
    'Project B'
  ];

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.day = new FormControl('', [
      // TODO: add validator to avoid decimal numbers
      Validators.required,
      Validators.min(1),
      Validators.max(31)
    ]);

    this.hours = new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]);

    this.project = new FormControl('', Validators.required);
  }

  createForm() {
    this.entryForm = new FormGroup({
      day: this.day,
      hours: this.hours,
      project: this.project
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
