import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../common.service";
import {ProjectData} from "./project-data.model";

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css'],
  providers: [CommonService]
})
export class ProjectDataComponent implements OnInit {

  entryForm: FormGroup;
  day: FormControl;
  hours: FormControl;
  project: FormControl;

  projects: string[] = [
    'Project A',
    'Project B'
  ];

  entries: ProjectData[] = [];

  constructor(private commonService: CommonService) { }

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
      this.entries.push(this.mapToModel(this.entryForm));
      this.entryForm.reset();
    }
  }

  removeEntry(i) {
    this.entries.splice(i, 1);
  }

  createSpreadsheet() {
    this.commonService.createSpreadsheet(this.entries);
  }

  mapToModel(entryForm: FormGroup): ProjectData {
    return new ProjectData(
      entryForm.value.day,
      entryForm.value.hours,
      entryForm.value.project
    );
  };
}
