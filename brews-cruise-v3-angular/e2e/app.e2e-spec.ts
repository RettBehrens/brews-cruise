import { BrewsCruiseV3AngularPage } from './app.po';

describe('brews-cruise-v3-angular App', () => {
  let page: BrewsCruiseV3AngularPage;

  beforeEach(() => {
    page = new BrewsCruiseV3AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
