export class Entry {
  public date: string;
  public project: string;
  public hours: number;

  constructor(date: string, project:string, hours:number) {
    this.date = date;
    this.project = project;
    this.hours = hours;
  }
}
