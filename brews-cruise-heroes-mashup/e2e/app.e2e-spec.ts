import { BrewsCruiseHeroesMashupPage } from './app.po';

describe('brews-cruise-heroes-mashup App', () => {
  let page: BrewsCruiseHeroesMashupPage;

  beforeEach(() => {
    page = new BrewsCruiseHeroesMashupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
