import { TestBed, inject } from '@angular/core/testing';

import { CreateSpreadsheetService } from './create-spreadsheet.service';

describe('CreateSpreadsheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateSpreadsheetService]
    });
  });

  it('should be created', inject([CreateSpreadsheetService], (service: CreateSpreadsheetService) => {
    expect(service).toBeTruthy();
  }));
});
