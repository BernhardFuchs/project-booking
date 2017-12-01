import { Component, OnInit } from '@angular/core';
import { Entry } from 'app/enterdata/entry.model';

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.css']
})
export class EnterdataComponent implements OnInit {

  entry: Entry;

  constructor() { }

  ngOnInit() {
  }

  submitEntry(entryForm) {
    console.log('submit received!!!');
  }
}
