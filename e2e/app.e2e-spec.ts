import { ProjectBookingPage } from './app.po';

describe('project-booking App', function() {
  let page: ProjectBookingPage;

  beforeEach(() => {
    page = new ProjectBookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
