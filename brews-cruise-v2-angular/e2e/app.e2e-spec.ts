import { BrewsCruiseV2AngularPage } from './app.po';

describe('brews-cruise-v2-angular App', () => {
  let page: BrewsCruiseV2AngularPage;

  beforeEach(() => {
    page = new BrewsCruiseV2AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
