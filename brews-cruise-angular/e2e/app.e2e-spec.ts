import { BrewsCruiseAngularPage } from './app.po';

describe('brews-cruise-angular App', () => {
  let page: BrewsCruiseAngularPage;

  beforeEach(() => {
    page = new BrewsCruiseAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
