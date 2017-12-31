export class EntryData {
  public day: number;
  public hours: number;
  public project: string;

  constructor(day: number, hours: number, project: string) {
    this.day = day;
    this.hours = hours;
    this.project = project;
  }
}
