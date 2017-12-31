import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateSpreadsheetService} from "../create-spreadsheet.service";
import {EntryData} from "./entry-data.model";

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.css'],
  providers: [CreateSpreadsheetService]
})
export class EnterdataComponent implements OnInit {

  entryForm: FormGroup;
  day: FormControl;
  hours: FormControl;
  project: FormControl;

  projects: string[] = [
    'Project A',
    'Project B'
  ];

  constructor(private createSpreadsheetService: CreateSpreadsheetService) { }

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

  onSubmit() {
    if (this.entryForm.valid) {
      let entryData = this.mapToModel(this.entryForm);
      this.createSpreadsheetService.addEntry(entryData);
      console.log("Form submitted");
      this.entryForm.reset();
    }
  }

  mapToModel(entryForm: FormGroup): EntryData {
    return new EntryData(
      entryForm.value.day,
      entryForm.value.hours,
      entryForm.value.project
    );
  };
}
