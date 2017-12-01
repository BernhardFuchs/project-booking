export class Entry {
  public day: number;
  public project: string;
  public hours: number;

  constructor(day: number, project: string, hours: number) {
    this.day = day;
    this.project = project;
    this.hours = hours;
  }
}
