import { Injectable } from '@angular/core';
import {ProjectData} from "./enterdata/project-data.model";

@Injectable()
export class CommonService {

  constructor() {
  }

  createSpreadsheet(entries: ProjectData[]) {
    console.log(entries);
    this.readSpreadsheet();
  }

  readSpreadsheet() {
    var GoogleSpreadsheet = require('google-spreadsheet');
    var creds = require('../../resources/client_secret.json')

    var doc = new GoogleSpreadsheet('1vSaz3d647lr6b_UgtANMIWE5V5_pjozOe2XciBLpUFw');

    doc.useServiceAccountAuth(creds, function (err) {
      doc.getRows(1, function (err, rows) {
        console.log(rows);
      });
    });
  }
}
