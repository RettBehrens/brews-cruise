import { BrewsCruiseAngularFirebasePage } from './app.po';

describe('brews-cruise-angular-firebase App', () => {
  let page: BrewsCruiseAngularFirebasePage;

  beforeEach(() => {
    page = new BrewsCruiseAngularFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
