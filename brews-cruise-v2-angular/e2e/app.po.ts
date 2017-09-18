import { browser, by, element } from 'protractor';

export class BrewsCruiseV2AngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
