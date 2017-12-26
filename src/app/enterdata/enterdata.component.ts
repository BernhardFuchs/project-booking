import { Component, OnInit } from '@angular/core';
import { Entry } from 'app/enterdata/entry.model';

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.css']
})
export class EnterdataComponent implements OnInit {

  currentRow: Entry;
  entries: Entry[] = [
    //new Entry(2, 12, 'Project b')
  ];

  constructor() { }

  ngOnInit() {
    this.currentRow = new Entry(0, 0, "");
  }

  submitEntry(entryForm) {
    console.log('submit received!!!');
    this.entries.push(this.currentRow);
    console.log(this.currentRow);
    console.log(this.entries);
    this.currentRow = new Entry(0, 0, "");
  }
}
